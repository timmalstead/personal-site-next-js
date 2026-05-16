// had to change this from an mjs file to a js file to use the __dirname variable, it seems to like the commonjs syntax better
const { join } = require("node:path")
const { aliasedDirectories } = require("./aliasedDirectories")

const resolvedAlaisedDirectories = aliasedDirectories.reduce((acc, dir) => {
    acc[dir] = join(__dirname, dir)    
    return acc
}, {})

const useTestingFirestore = process.env?.USE_TESTING_FIRESTORE === "true"

const serverOnlyPackages = [
    /@google-cloud\/firestore/,
    /@google-cloud\/storage/,
    /react-markdown/,
    /react-syntax-highlighter/,
    /sharp/,
    /masto/,
    /@atproto\/api/,
    /lorem-ipsum/,
].map((serverPackage) => ({
    test: serverPackage,
    use: "null-loader",
}))

/** @type {import('next').NextConfig} */
const nextConfig = {
    // this allows the playwright server to work properly during testing
    allowedDevOrigins: ['127.0.0.1', 'localhost'],
    images: {qualities: [100, 75]},
    output: "standalone",
    // webpack for dev and test
    webpack: (config, { isServer }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            ...resolvedAlaisedDirectories,
        }

        const isClient = !isServer
        if (isClient)
            config.module.rules = [
                ...config.module.rules,
                ...serverOnlyPackages,
            ]

        if (isServer && useTestingFirestore) {
            console.info("Using testing Firestore")
            config.resolve.alias = {
                ...config.resolve.alias,
                ...(useTestingFirestore && {
                    "@google-cloud/firestore": join(
                        __dirname,
                        "&data",
                        "firestoreMock"
                    ),
                }),
            }
        }
        return config
    },
    // turbopack for prod
    turbopack: {
        // I don't love that I can't use a __dirname variable for an alias
        resolveAlias: {
            ...resolvedAlaisedDirectories,
            ...(useTestingFirestore && {
                "@google-cloud/firestore": join(
                    ".",
                    "&data",
                    "firestoreMock"
                ),
            }),
        },
    },
    rewrites: async () => [
        {
            source: "/assets/:path*",
            destination:
                "https://storage.googleapis.com/public-site-storage-6611b8f/:path*",
        },
    ],
    redirects: async () => [
        {
            source: '/kagi-tryout',
            destination: '/',
            permanent: true,
        }
    ]
}

module.exports = nextConfig
