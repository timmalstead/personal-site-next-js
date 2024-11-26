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
import { getContent } from "_data"
import { notFound as redirectToNotFound } from "next/navigation"
import { Fragment, type ReactNode } from "react"

interface ResolverProps {
    dataPath: string | null
    dataType: "page" | "component"
}

type PossibleContent<T> = T | undefined

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

const noContentErrorMessage = "No content found"
const validErrorMessages = [
    noContentErrorMessage,
    "Cannot destructure property",
    "Cannot read properties of undefined",
]

const Resolver = async ({ dataPath, dataType }: ResolverProps) => {
    try {
        const dataPrefix = dataType === "component" ? "component-data/" : ""
        const contentPath = `${dataPrefix}${dataPath}`
        const content =
            await getContent<PossibleContent<ComponentMapEntry>>(contentPath)

        if (content === undefined) throw new Error(noContentErrorMessage)
        if (content instanceof Error) throw content

        return (content as ComponentMapEntry).components?.map(
            ({ useReadPercentage, ...props }, i) => {
                const Wrapper = useReadPercentage ? ReadPercentage : Fragment
                return (
                    <Wrapper key={`${props?.name}-${i}`}>
                        {renderComponentMapEntry(componentMap, props)}
                    </Wrapper>
                )
            }
        )
    } catch (error) {
        const convertedError = error as Error
        const errorMessage = convertedError.toString()

        console.error(errorMessage)

        const shouldRedirectToNotFound =
            dataType === "page" &&
            validErrorMessages.some((msg) => errorMessage.includes(msg))
        if (shouldRedirectToNotFound) redirectToNotFound()
    }
}

export default Resolver
