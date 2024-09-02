import { Markdown, Image, LastModified, type ImageProps } from "../"
import { getContent } from "../../_utils/firestore"
import { notFound as redirectToNotFound } from "next/navigation"
import type { ReactNode } from "react"

interface ResolverProps {
    dataPath: string | null
    dataType: "page" | "component"
}

type ComponentNames = Lowercase<"Markdown" | "Image" | "LastModified">

type ComponentMapEntry = {
    name: ComponentNames
    text?: string
    lastModifiedDate?: number
} & ImageProps

const componentMap: {
    [key in ComponentNames]: (args: ComponentMapEntry) => ReactNode
} = {
    markdown: ({ text }) =>
        text?.split("\\n").map((md, i) => {
            const keyFromMd = `${md.slice(0, 5)}${i}`
            return <Markdown key={keyFromMd}>{md}</Markdown>
        }),
    image: ({ src, alt, ...rest }) =>
        typeof src === "string" && (
            <Image src={src} alt={alt || ""} {...rest} />
        ),
    lastmodified: ({ lastModifiedDate }) =>
        lastModifiedDate && (
            <LastModified lastModifiedDate={lastModifiedDate} />
        ),
}

const validErrorMessages = [
    "Cannot destructure property",
    "Cannot read properties of undefined",
]

export const dynamic = "force-dynamic"
const Resolver = async ({ dataPath, dataType }: ResolverProps) => {
    try {
        const { components } = await getContent<{
            components: ComponentMapEntry[]
        }>(dataPath as string)

        return components.map((props) =>
            componentMap[props.name.toLowerCase() as ComponentNames](props)
        )
    } catch (error) {
        const convertedError = error as Error
        const errorMessage = convertedError.toString()

        console.error(errorMessage)

        if (
            dataType === "page" &&
            validErrorMessages.some((msg) => errorMessage.includes(msg))
        )
            redirectToNotFound()
    }
}

export default Resolver
