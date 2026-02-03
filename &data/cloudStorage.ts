import { Storage } from "@google-cloud/storage"
import { credentials } from "&data/server"

export const cloudStorage = new Storage(credentials)
