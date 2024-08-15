import { Resolver } from "./_components"
import { headers } from "next/headers"

const Home = () => {
    const homePagePath = headers().get("X-Pagename")
    return (
        <main>
            <Resolver dataPath={homePagePath} dataType="page" />
        </main>
    )
}

export default Home
