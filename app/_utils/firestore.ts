import { Firestore } from "@google-cloud/firestore"
import { cache } from "react"

export const firestoreDatabase = new Firestore({
    projectId: process.env.PROJECT_ID,
    credentials: {
        client_email: process.env.SERVICE_ACCT_CLIENT_EMAIL,
        private_key: process.env.SERVICE_ACCT_PRIVATE_KEY,
    },
})

export const getContent = cache(async <T>(docPath: string): Promise<T> => {
    const docRef = firestoreDatabase.doc(`${docPath}/content`)
    return (await docRef.get().then((doc) => doc.data())) as T
})
