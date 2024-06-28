/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    webpack: (config, { isServer }) => {
        if (!isServer)
            config.module.rules.push({
                test: /react-markdown/,
                use: "null-loader",
            })
        return config
    },
}

export default nextConfig
