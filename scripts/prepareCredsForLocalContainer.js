const { readFileSync, writeFileSync } = require("node:fs")
const { join } = require("node:path")

const [envFilePath, credentialsFilePath] = [
    join(__dirname, "..", ".env"),
    join(__dirname, "..", "app", "_data", "credentials.ts"),
]

const [splitEnvFile, splitCredentialFile] = [
    envFilePath,
    credentialsFilePath,
].map((path) => readFileSync(path, "utf-8").split("\n"))

const findServiceAccountKey = (line) =>
    line.includes("SERVICE_ACCT_PRIVATE_KEY")
const [
    privateKeyValLine,
    privateKeyObjectKeyLine,
    indexOfPrivateKeyObjectKeyLine,
] = [
    splitEnvFile.find(findServiceAccountKey),
    splitCredentialFile.find(findServiceAccountKey),
    splitCredentialFile.findIndex(findServiceAccountKey),
]

const [privateKeyVal, privateKeyObjectKey] = [
    privateKeyValLine.split("=")[1],
    privateKeyObjectKeyLine.split(":")[0],
]

const newCredentialPrivateKeyLine = `${privateKeyObjectKey}: ${privateKeyVal},`
const newCredentialFile = splitCredentialFile
    .with(indexOfPrivateKeyObjectKeyLine, newCredentialPrivateKeyLine)
    .join("\n")

writeFileSync(credentialsFilePath, newCredentialFile)
