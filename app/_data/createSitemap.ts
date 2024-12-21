import { firestoreDatabase } from "./firestore"
import { cloudStorage } from "./cloudStorage"
import type { DocumentData } from "@google-cloud/firestore"

interface AssembledData {
    id: string
    data: DocumentData
}

const routesToIgnore = new Set(["api", "component-data"])
const fetchAndAssembleDataForSitemap = async (): Promise<AssembledData[]> => {
    const collections = (await firestoreDatabase.listCollections()).filter(
        ({ id }) => !routesToIgnore.has(id)
    )

    const dataPromises = collections.map((collection) =>
        collection.get().then((doc) => doc.docs.map((doc) => doc.data()))
    )
    const resolvedData = await Promise.all(dataPromises)

    return resolvedData.map((dataArr, index) => {
        const { id } = collections[index]
        const [data] = dataArr
        return { id, data }
    })
}

const assembleURL = (xml: string, { id }: AssembledData): string => {
    let route: string = ""
    if (id !== "home") {
        route += `/${id}`
        // need a special case for blog data
    }

    return (xml += `<url><loc>https://www.timothymalstead.com${route}</loc></url>`)
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

// createSitemap()
// unit test: maybe mock the function to add it to the gcp bucket to a local variable and check it that way
