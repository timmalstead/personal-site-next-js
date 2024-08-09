import Markdown from "../markdown"
import { getContent } from "../../_utils/firestore"
import { headers } from "next/headers"
import { notFound as redirectToNotFound } from "next/navigation"

export const dynamic = "force-dynamic"
const Resolver = async () => {
    try {
        const content = await getContent<{ text: string }>(
            headers().get("X-Pagename") as string
        )

        const markdownDocs = content.text
            .split("\\n")
            .map((doc) => <Markdown key={doc}>{doc}</Markdown>)

        return <main>{markdownDocs}</main>
    } catch (error) {
        const convertedError = error as Error
        const errorMessage = convertedError.toString()

        console.error(errorMessage)
        if (errorMessage.includes("Cannot read properties of undefined"))
            redirectToNotFound()
    }
}

export default Resolver
