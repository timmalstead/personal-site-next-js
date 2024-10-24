import type { DocumentReference } from "@google-cloud/firestore"
import { cache } from "react"
import type { Metadata } from "next"
import { firestoreDatabase } from "./firestore"
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

// Purposefully not providing content error message here
// do this not as an anon function?
export const getContent = cache(
    async <T>(docPath: string): Promise<T | ErrorObject> => {
        try {
            const docRef = getDocRef(docPath)
            return (await getDocData(docRef)) as T
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
            return { success: `Data deleted at ${docPath}` }
        }
    } catch (error) {
        return handleError(error)
    }
}
