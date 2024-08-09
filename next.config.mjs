const serverOnlyPackages = [
    /react-markdown/,
    /@google-cloud\/firestore/,
    /lorem-ipsum/,
]
const useTestingFirestore = process.env?.USE_TESTING_FIRESTORE === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    webpack: (config, { isServer }) => {
        if (!isServer)
            serverOnlyPackages.forEach((serverPackage) => {
                config.module.rules.push({
                    test: serverPackage,
                    use: "null-loader",
                })
            })

        if (isServer && useTestingFirestore) {
            console.log("Using testing Firestore")
            config.resolve.alias = {
                ...config.resolve.alias,
                "@google-cloud/firestore": "/app/_utils/firestoreMock",
            }
        }
        return config
    },
}

export default nextConfig
