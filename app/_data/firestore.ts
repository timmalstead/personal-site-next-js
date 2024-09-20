import { Firestore } from "@google-cloud/firestore"
import { isEven } from "_utils"

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

export const getContent = async <T>(docPath: string): Promise<T> => {
    const splitPath = docPath.split("/")
    const contentPath = isEven(splitPath.length) ? "/content/data" : "/content"

    const docRef = firestoreDatabase.doc(`${docPath}${contentPath}`)
    return (await docRef.get().then((doc) => doc.data())) as T
}
