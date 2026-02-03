// had to change this from an mjs file to a js file to use the __dirname variable, it seems to like the commonjs syntax better
const { join } = require("node:path")
const { aliasedDirectories } = require("./aliasedDirectories")

const resolvedAlaisedDirectories = aliasedDirectories.reduce((acc, dir) => {
    if (dir === "&utils") {
        acc[dir] = join(__dirname, dir)
    } else {
        acc[dir] = join(__dirname, "app", dir)
    }
    
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
    output: "standalone",
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

        if (isServer) {
            console.info("Using testing Firestore")
            config.resolve.alias = {
                ...config.resolve.alias,
                ...(useTestingFirestore && {
                    "@google-cloud/firestore": join(
                        __dirname,
                        "app",
                        "&data",
                        "firestoreMock"
                    ),
                }),
            }
        }
        return config
    },
    turbopack: {
        // I'm not sure I'm feeling turbo until they can differentiate between the server and client
        // Also don't love that I can't use a __dirname variable for an alias
        // to turn turbo on, add a --turbopack flag to the next dev command
        resolveAlias: {
            ...resolvedAlaisedDirectories,
            ...(useTestingFirestore && {
                "@google-cloud/firestore": join(
                    ".",
                    "app",
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
