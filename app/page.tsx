import { Resolver } from "./_components"
import { headers } from "next/headers"

const Home = () => {
    const homePagePath = headers().get("X-Pagename")
    return (
        <main>
            <Resolver dataPath={homePagePath} dataType="page" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/google_search_console.png" alt="image test" />
        </main>
    )
}

export default Home
