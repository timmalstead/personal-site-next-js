import { Resolver } from "../_components"
import { headers } from "next/headers"

const DynamicPage = () => {
    const dynamicPagePath = headers().get("X-Pagename")
    return (
        <main>
            <Resolver dataPath={dynamicPagePath} />
        </main>
    )
}

export default DynamicPage
