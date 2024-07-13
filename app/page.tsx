import { Markdown } from "./_components"
import { getContent } from "./_utils/firestore"
import { headers } from "next/headers"

export const revalidate = 900

const Home = async () => {
    const homeContent = await getContent<{ text: string }>(
        headers().get("X-Pagename") as string
    )

    const markdownDocs = homeContent.text
        .split("\\n")
        .map((doc) => <Markdown key={doc}>{doc}</Markdown>)
    return <main>{markdownDocs}</main>
}

export default Home
