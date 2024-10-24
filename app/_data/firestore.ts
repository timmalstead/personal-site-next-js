import { Firestore } from "@google-cloud/firestore"

export const firestoreDatabase = new Firestore({
    projectId: process.env.PROJECT_ID,
    credentials: {
        client_email: process.env.SERVICE_ACCT_CLIENT_EMAIL,
        // For production docker containers we have to replace \n with actual newlines because Docker seems to take issue
        // https://stackoverflow.com/questions/74131595/error-error1e08010cdecoder-routinesunsupported-with-google-auth-library
        // For local builds, we create the container with the value hardcoded and then revert after the build
        // This is done through the use of prebuild and postbuild scripts in the package.json
        // prettier-ignore
        private_key: (process.env.SERVICE_ACCT_PRIVATE_KEY || "").split(String.raw`\n`).join("\n"),
    },
})
