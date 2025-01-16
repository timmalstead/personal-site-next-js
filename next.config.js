// had to change this from an mjs file to a js file to use the __dirname variable, it seems to like the commonjs syntax better
const { resolve } = require("node:path")

const serverOnlyPackages = [
    /react-markdown/,
    /@google-cloud\/firestore/,
    /@google-cloud\/storage/,
    /lorem-ipsum/,
    /module-alias/,
]

const aliasedDirectories = ["_components", "_data", "@utils"]
const useTestingFirestore = process.env?.USE_TESTING_FIRESTORE === "true"

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    webpack: (config, { isServer }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...aliasedDirectories.reduce((acc, dir) => {
                acc[dir] = resolve(__dirname, `app/${dir}`)
                return acc
            }, {}),
        }

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
                "@google-cloud/firestore": resolve(
                    __dirname,
                    "app/_data/firestoreMock"
                ),
            }
        }
        return config
    },
    rewrites: async () => [
        {
            source: "/assets/:path*",
            destination:
                "https://storage.googleapis.com/public-site-storage-6611b8f/:path*",
        },
    ],
}

module.exports = nextConfig
