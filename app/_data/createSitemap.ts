import { firestoreDatabase } from "./firestore"
import { cloudStorage } from "./cloudStorage"
import type { DocumentData, CollectionReference } from "@google-cloud/firestore"

interface AssembledData {
    id: string
    data?: DocumentData & {
        components?: { lastModifiedDate: number; name: string }[]
    }
}

type CollectionRef = CollectionReference<DocumentData, DocumentData>

const flattenCollectionData = (collection: CollectionRef) =>
    collection.get().then((doc) => doc.docs.map((doc) => doc.data()))

const assembleCollectionData = async ({
    collectionRefs,
    idModifier = "",
}: {
    collectionRefs: CollectionRef[]
    idModifier?: string
}) => {
    const collectionPromises = collectionRefs.map(flattenCollectionData)
    const resolvedCollectionPromises = await Promise.all(collectionPromises)

    return resolvedCollectionPromises.map((dataArr, index) => {
        const { id } = collectionRefs[index]
        const [data] = dataArr
        return { id: `${idModifier}${id}`, data }
    })
}

const routesToIgnore = new Set(["api", "component-data"])
const fetchAndAssembleDataForSitemap = async (): Promise<AssembledData[]> => {
    const topLevelCollections = (
        await firestoreDatabase.listCollections()
    ).filter(({ id }) => !routesToIgnore.has(id))

    const assembledTopLevelCollections = await assembleCollectionData({
        collectionRefs: topLevelCollections,
    })

    const blogPostCollections = await firestoreDatabase
        .doc("blog/posts")
        .listCollections()

    const assembledBlogPosts = await assembleCollectionData({
        collectionRefs: blogPostCollections,
        idModifier: "blog/",
    })

    return [...assembledTopLevelCollections, ...assembledBlogPosts]
}

const assembleURL = (xml: string, { id, data }: AssembledData): string => {
    const route = id === "home" ? "" : `/${id}`

    const lastModifiedDate = data?.components?.find(
        ({ name }) => name.toLowerCase() === "lastmodified"
    )?.lastModifiedDate
    const lastmod =
        lastModifiedDate && Number.isInteger(lastModifiedDate)
            ? `<lastmod>${new Date(lastModifiedDate).toISOString()}</lastmod>`
            : ""

    return (xml += `<url><loc>https://www.timothymalstead.com${route}</loc>${lastmod}</url>`)
}

const saveSitemap = async (
    fileName: string,
    fileData: string
): Promise<void> => {
    await cloudStorage
        .bucket("public-site-storage-6611b8f")
        .file(fileName)
        .save(fileData)
}

export const createSitemap = async (): Promise<void> => {
    try {
        const sitemapData = await fetchAndAssembleDataForSitemap()
        const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapData.reduce(assembleURL, "")}</urlset>`
        await saveSitemap("sitemap.xml", sitemapXml)
    } catch (err) {
        console.error(err)
    }
}
