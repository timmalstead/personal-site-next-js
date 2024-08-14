import Markdown from "../markdown"
import { getContent } from "../../_utils/firestore"
import { notFound as redirectToNotFound } from "next/navigation"
import type { ReactNode } from "react"

interface ResolverProps {
    dataPath: string | null
}

interface ComponentMapEntry {
    name: "Markdown"
    text?: string
}

const componentMap: {
    [key in ComponentMapEntry["name"]]: (args: ComponentMapEntry) => ReactNode
} = {
    Markdown: ({ text }) =>
        text?.split("\\n").map((doc) => <Markdown key={doc}>{doc}</Markdown>),
}

export const dynamic = "force-dynamic"
const Resolver = async ({ dataPath }: ResolverProps) => {
    try {
        const { components } = await getContent<{
            components: ComponentMapEntry[]
        }>(dataPath as string)

        return components.map((props) => componentMap[props.name](props))
    } catch (error) {
        const convertedError = error as Error
        const errorMessage = convertedError.toString()

        console.error(errorMessage)
        if (errorMessage.includes("Cannot read properties of undefined"))
            redirectToNotFound()
        return <></>
    }
}

export default Resolver
