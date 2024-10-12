import { Firestore, DocumentReference } from "@google-cloud/firestore"
import { isEven, CreateArgs } from "_utils"

const firestoreDatabase = new Firestore({
    projectId: process.env.PROJECT_ID,
    credentials: {
        client_email: process.env.SERVICE_ACCT_CLIENT_EMAIL,
        // Replace \n with actual newlines because Docker seems to take issue
        // https://stackoverflow.com/questions/74131595/error-error1e08010cdecoder-routinesunsupported-with-google-auth-library
        private_key: (process.env.SERVICE_ACCT_PRIVATE_KEY || "")
            .split(String.raw`\n`)
            .join("\n"),
    },
})

// TODO: better error handling and typing for all
const getDocRef = (docPath: string) => {
    const splitPath = docPath.split("/")
    const contentPath = isEven(splitPath.length) ? "/content/data" : "/content"
    return firestoreDatabase.doc(`${docPath}${contentPath}`)
}

const getDocData = async (docRef: DocumentReference) =>
    await docRef.get().then((doc) => doc.data())

export const getContent = async <T>(docPath: string): Promise<T> => {
    const docRef = getDocRef(docPath)
    return (await getDocData(docRef)) as T
}

export const setContent = async ({
    docPath,
    data,
    confirmReplace,
}: CreateArgs) => {
    const docRef = getDocRef(docPath)
    const dataDoesExist = await getDocData(docRef)
    if (dataDoesExist && !confirmReplace)
        return {
            error: `Data already exists at ${docPath}, send with boolean 'confirmReplace' argument to replace`,
        }
    else {
        await docRef.set(data)
        return { success: `Data created at ${docPath}` }
    }
}

// put in confirmation?
export const deleteContent = async (docPath: string) => {
    const docRef = getDocRef(docPath)
    const dataDoesExist = await getDocData(docRef)
    if (dataDoesExist) {
        await docRef.delete()
        return { success: `Data deleted at ${docPath}` }
    } else return { error: `No data found at ${docPath}` }
}
