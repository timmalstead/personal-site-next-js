import { Resolver, Image } from "./_components"
import { headers } from "next/headers"

const Home = () => {
    const homePagePath = headers().get("X-Pagename")
    return (
        <main>
            <Resolver dataPath={homePagePath} dataType="page" />
            <Image src="/google_search_console.png" alt="title" />
            <Image
                src="/google_search_console:w1917-h1014.png"
                alt="title"
                inline
                width={500}
            />
            <span>blah blah blah</span>
        </main>
    )
}

export default Home
