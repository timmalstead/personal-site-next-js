const { readFileSync, writeFileSync } = require("node:fs")
const { join } = require("node:path")

const [envFilePath, firestoreFilePath] = [
    join(__dirname, "..", ".env"),
    join(__dirname, "..", "app", "_data", "firestore.ts"),
]

const [splitEnvFile, splitFirestoreFile] = [envFilePath, firestoreFilePath].map(
    (path) => readFileSync(path, "utf-8").split("\n")
)

const findServiceAccountKey = (line) =>
    line.includes("SERVICE_ACCT_PRIVATE_KEY")
const [
    privateKeyValLine,
    privateKeyObjectKeyLine,
    indexOfPrivateKeyObjectKeyLine,
] = [
    splitEnvFile.find(findServiceAccountKey),
    splitFirestoreFile.find(findServiceAccountKey),
    splitFirestoreFile.findIndex(findServiceAccountKey),
]

const [privateKeyVal, privateKeyObjectKey] = [
    privateKeyValLine.split("=")[1],
    privateKeyObjectKeyLine.split(":")[0],
]

const newFirestorePrivateKeyLine = `${privateKeyObjectKey}: ${privateKeyVal},`
const newFirestoreFile = splitFirestoreFile
    .with(indexOfPrivateKeyObjectKeyLine, newFirestorePrivateKeyLine)
    .join("\n")

writeFileSync(firestoreFilePath, newFirestoreFile)
