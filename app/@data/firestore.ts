import { Firestore } from "@google-cloud/firestore"
import { credentials } from "./credentials"

export const firestoreDatabase = new Firestore(credentials)
