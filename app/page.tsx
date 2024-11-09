import { Resolver } from "_components"
import { getSeoData } from "_data"
import type { Metadata } from "next"

export const generateMetadata = async (): Promise<Metadata> => {
    // will return valid metadata as described in above Metadata interface
    return await getSeoData("home")
}

const Home = () => (
    <main>
        <Resolver dataPath="home" dataType="page" />
    </main>
)

export default Home
