import { Firestore } from "@google-cloud/firestore"
import { credentials } from "app/&data/server"

export const firestoreDatabase = new Firestore(credentials)
