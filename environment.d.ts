/// <reference types="node" />

declare namespace NodeJS {
    interface ProcessEnv {
        readonly ACTIVE_ENV: "local" | "preview" | "prod"
        readonly USE_TESTING_FIRESTORE: "true" | "false"
        readonly CI: "true" | "false"
        readonly PORT: string
        readonly MIDDLEWARE_AUTHORIZATION: string
        readonly PROJECT_ID: string
        readonly SERVICE_ACCT_CLIENT_EMAIL: string
        readonly SERVICE_ACCT_PRIVATE_KEY: string
        readonly CURRENT_VERSION: string
        readonly BLUESKY_TOKEN: string
        readonly MASTODON_TOKEN: string
    }
}
