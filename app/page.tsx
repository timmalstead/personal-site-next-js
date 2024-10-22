import { Resolver } from "_components"
import { getSeoData } from "_data"

export const generateMetadata = async () => {
    return await getSeoData("home")
}

const Home = () => (
    <main>
        <Resolver dataPath="home" dataType="page" />
    </main>
)

export default Home
