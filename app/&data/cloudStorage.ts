import { Storage } from "@google-cloud/storage"
import { credentials } from "app/&data/server"

export const cloudStorage = new Storage(credentials)
