import { Storage } from "@google-cloud/storage"
import { credentials } from "./credentials"

export const cloudStorage = new Storage(credentials)
