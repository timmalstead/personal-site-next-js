import type { DocumentReference } from "@google-cloud/firestore"
import type { Metadata } from "next"
import { cache as reactCache } from "react"
import { firestoreDatabase } from "./firestore"
import { getCache, setCache, clearCacheKey } from "./cache"
import {
    isEven,
    handleError,
    type CreateArgs,
    type ErrorObject,
    type DestoryAndCreateResponse,
} from "_utils"

const getDocRef = (docPath: string) => {
    const splitPath = docPath.split("/")
    const contentPath = isEven(splitPath.length) ? "/content/data" : "/content"
    return firestoreDatabase.doc(`${docPath}${contentPath}`)
}

const getDocData = async (docRef: DocumentReference) =>
    await docRef.get().then((doc) => doc.data())

// using reactCache to cache data in memory for requests to the same docPath on a single request, such as seo data and content
// Also using a simple in-memory cache to store data for 15 minutes
// This is to prevent unnecessary reads from Firestore and to speed up the site
// From what I understand, reactCache should function that way, but that's not what I was seeing
// Also, I am purposefully not providing a content error message here
export const getContent = reactCache(
    async <T>(docPath: string): Promise<T | ErrorObject> => {
        try {
            const cachedData = getCache(docPath)
            if (cachedData) return cachedData as T
            else {
                const docRef = getDocRef(docPath)
                const fetchedData = (await getDocData(docRef)) as T

                setCache(docPath, fetchedData)
                return fetchedData
            }
        } catch (error) {
            return handleError(error)
        }
    }
)

export const getSeoData = async (docPath: string): Promise<Metadata> => {
    try {
        const seoData = await getContent<{ metadata: Metadata }>(docPath)
        if ((seoData as ErrorObject).error) return {}
        else {
            const { metadata } = seoData as { metadata: Metadata }
            return metadata || {}
        }
    } catch (error) {
        // logging error, but not returning it
        handleError(error)
        return {}
    }
}

export const setContent = async ({
    docPath,
    data,
    confirmReplace,
}: CreateArgs): Promise<DestoryAndCreateResponse> => {
    try {
        const docRef = getDocRef(docPath)
        const dataDoesExist = await getDocData(docRef)
        if (dataDoesExist && !confirmReplace)
            throw new Error(
                `Data already exists at ${docPath}, send with boolean 'confirmReplace' argument to replace`
            )
        else {
            await docRef.set(data)
            return { success: `Data created at ${docPath}` }
        }
    } catch (error) {
        return handleError(error)
    }
}

export const deleteContent = async (
    docPath: string
): Promise<DestoryAndCreateResponse> => {
    try {
        const docRef = getDocRef(docPath)
        const dataDoesExist = await getDocData(docRef)
        if (!dataDoesExist) throw new Error(`No data found at ${docPath}`)
        else {
            await docRef.delete()
            clearCacheKey(docPath)
            return { success: `Data deleted at ${docPath}` }
        }
    } catch (error) {
        return handleError(error)
    }
}