import Markdown from "../markdown"
import { getContent } from "../../_utils/firestore"
import { headers } from "next/headers"

const Resolver = async () => {
    const content = await getContent<{ text: string }>(
        headers().get("X-Pagename") as string
    )

    const markdownDocs = content.text
        .split("\\n")
        .map((doc) => <Markdown key={doc}>{doc}</Markdown>)

    return <main>{markdownDocs}</main>
}

export default Resolver
