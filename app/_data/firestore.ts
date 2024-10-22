import { Firestore, type DocumentReference } from "@google-cloud/firestore"
import { cache } from "react"
import { Metadata } from "next"
import {
    isEven,
    handleError,
    type CreateArgs,
    type ErrorObject,
    type DestoryAndCreateResponse,
} from "_utils"

const firestoreDatabase = new Firestore({
    projectId: process.env.PROJECT_ID,
    credentials: {
        client_email: process.env.SERVICE_ACCT_CLIENT_EMAIL,
        // For production docker containers we have to replace \n with actual newlines because Docker seems to take issue
        // https://stackoverflow.com/questions/74131595/error-error1e08010cdecoder-routinesunsupported-with-google-auth-library
        // for running this with a LOCAL docker container, HARDCODE the private key below 😑
        private_key: (process.env.SERVICE_ACCT_PRIVATE_KEY || "")
            .split(String.raw`\n`)
            .join("\n"),
    },
})
const getDocRef = (docPath: string) => {
    const splitPath = docPath.split("/")
    const contentPath = isEven(splitPath.length) ? "/content/data" : "/content"
    return firestoreDatabase.doc(`${docPath}${contentPath}`)
}

const getDocData = async (docRef: DocumentReference) =>
    await docRef.get().then((doc) => doc.data())

// Purposefully not providing content error message here
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
        const seoData = await getContent(docPath)
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
