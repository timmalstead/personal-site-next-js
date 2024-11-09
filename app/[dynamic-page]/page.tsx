import { headers } from "next/headers"
import { Resolver } from "_components"
import { getSeoData } from "_data"
import type { Metadata } from "next"

export const generateMetadata = async (): Promise<Metadata> => {
    // will return valid metadata as described in above Metadata interface
    const dynamicPagePath = `${headers().get("X-Pagename")}`
    return await getSeoData(dynamicPagePath)
}

const DynamicPage = () => {
    const dynamicPagePath = headers().get("X-Pagename")
    return (
        <main>
            <Resolver dataPath={dynamicPagePath} dataType="page" />
        </main>
    )
}

export default DynamicPage
