import { headers } from "next/headers"
import type { Metadata } from "next"
import { getSeoData } from "_data"
import Resolver from "../resolver"

export const generateDynamicMetadata = async (): Promise<Metadata> => {
    // will return valid metadata as described in above Metadata interface
    const dynamicPagePath = `${headers().get("X-Pagename")}`
    return await getSeoData(dynamicPagePath)
}

const DynamicPageComponent = () => {
    const dynamicPagePath = headers().get("X-Pagename")
    return (
        <main>
            <Resolver dataPath={dynamicPagePath} dataType="page" />
        </main>
    )
}

export default DynamicPageComponent
