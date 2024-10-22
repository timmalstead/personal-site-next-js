import { Resolver } from "_components"
import { getSeoData } from "_data"

export const generateMetadata = async () => {
    return await getSeoData("blog")
}

const Blog = () => (
    <main>
        <Resolver dataPath="blog" dataType="page" />
    </main>
)

export default Blog
