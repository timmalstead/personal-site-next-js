import { Firestore } from "@google-cloud/firestore"
import { credentials } from "@data/server"

export const firestoreDatabase = new Firestore(credentials)
