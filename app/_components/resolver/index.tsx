import {
    Markdown,
    Image,
    type ImageProps,
    LastModified,
    type LastModifiedProps,
    ReadPercentage,
    Link,
    type LinkProps,
} from "_components"
import { getContent } from "_utils"
import { notFound as redirectToNotFound } from "next/navigation"
import { Fragment, type ReactNode } from "react"

interface ResolverProps {
    dataPath: string | null
    dataType: "page" | "component"
}

type ComponentNames = Lowercase<
    "Markdown" | "Image" | "LastModified" | "Array" | "Link"
>

type ComponentMap = {
    [key in ComponentNames]: (args: ComponentMapEntry) => ReactNode
}

type ComponentMapEntry = {
    name?: ComponentNames
    useReadPercentage?: boolean
    text?: string
    components?: ComponentMapEntry[]
} & ImageProps &
    LastModifiedProps &
    LinkProps

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
    link: ({ href, text, ...rest }) =>
        href &&
        text && (
            <Link href={href} {...(rest as Partial<LinkProps>)}>
                {text}
            </Link>
        ),
}

const validErrorMessages = [
    "Cannot destructure property",
    "Cannot read properties of undefined",
]

// make dynamic behavior dependent on environment?
export const dynamic = "force-dynamic"
const Resolver = async ({ dataPath, dataType }: ResolverProps) => {
    try {
        const dataPrefix = dataType === "component" ? "component-data/" : ""
        const contentPath = `${dataPrefix}${dataPath}`
        const { components } = await getContent<{
            components: ComponentMapEntry[]
        }>(contentPath)

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
