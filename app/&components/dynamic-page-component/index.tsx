import { headers } from "next/headers"
import type { Metadata } from "next"
import { getSeoData } from "app/&data/server"
import { Resolver } from "app/&components/server"

export const generateMetadata = async (): Promise<Metadata> => {
    // will return valid metadata as described in above Metadata interface
    const dynamicPagePath = `${(await headers()).get("X-Pagename")}`
    return await getSeoData(dynamicPagePath)
}

const DynamicPageComponent = async () => {
    const dynamicPagePath = (await headers()).get("X-Pagename")
    return (
        <main>
            <Resolver dataPath={dynamicPagePath} dataType="page" />
        </main>
    )
}

export default DynamicPageComponent
