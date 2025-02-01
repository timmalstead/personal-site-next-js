import { Storage } from "@google-cloud/storage"
// purposefully using a relative import
import { credentials } from "./credentials"

export const cloudStorage = new Storage(credentials)
