import Markdown from "../markdown"
import { getContent } from "../../_utils/firestore"
import { notFound as redirectToNotFound } from "next/navigation"

interface ResolverProps {
    dataPath: string | null
}

export const dynamic = "force-dynamic"
const Resolver = async ({ dataPath }: ResolverProps) => {
    try {
        const content = await getContent<{ text: string }>(dataPath as string)

        return content.text
            .split("\\n")
            .map((doc) => <Markdown key={doc}>{doc}</Markdown>)
    } catch (error) {
        const convertedError = error as Error
        const errorMessage = convertedError.toString()

        console.error(errorMessage)
        if (errorMessage.includes("Cannot read properties of undefined"))
            redirectToNotFound()
    }
}

export default Resolver
