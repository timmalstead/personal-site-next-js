import { Firestore } from "@google-cloud/firestore"
// purposefully using a relative import
import { credentials } from "./credentials"

export const firestoreDatabase = new Firestore(credentials)
