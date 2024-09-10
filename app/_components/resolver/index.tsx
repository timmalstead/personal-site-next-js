import {
    Markdown,
    Image,
    type ImageProps,
    LastModified,
    type LastModifiedProps,
    ReadPercentage,
} from "../"
import { getContent } from "../../_utils/firestore"
import { notFound as redirectToNotFound } from "next/navigation"
import { Fragment, type ReactNode } from "react"

interface ResolverProps {
    dataPath: string | null
    dataType: "page" | "component"
}

type ComponentNames = Lowercase<"Markdown" | "Image" | "LastModified" | "Array">

type ComponentMap = {
    [key in ComponentNames]: (args: ComponentMapEntry) => ReactNode
}

type ComponentMapEntry = {
    name?: ComponentNames
    useReadPercentage?: boolean
    text?: string
    components?: ComponentMapEntry[]
} & ImageProps &
    LastModifiedProps

const renderComponentMapEntry = (
    componentMap: ComponentMap,
    props: ComponentMapEntry
) => componentMap[props?.name?.toLowerCase() as ComponentNames](props)

const componentMap: ComponentMap = {
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
    array: ({ components }) =>
        components?.map((props) =>
            renderComponentMapEntry(componentMap, props)
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

        return components.map(({ useReadPercentage, ...props }, i) => {
            const Wrapper = useReadPercentage ? ReadPercentage : Fragment
            return (
                <Wrapper key={`${props?.name}-${i}`}>
                    {renderComponentMapEntry(componentMap, props)}
                </Wrapper>
            )
        })
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
