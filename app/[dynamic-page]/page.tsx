import { headers } from "next/headers"
import { Resolver } from "_components"
import { getSeoData } from "_data"

export const generateMetadata = async () => {
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
