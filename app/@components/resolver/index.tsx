import {
    Markdown,
    Image,
    type ImageProps,
    LastModified,
    type LastModifiedProps,
    Link,
    type LinkProps,
    ObjectComponent,
    type ObjectComponentProps,
    Attribution,
} from "@components/server"
import { ReadPercentage } from "@components/client"
import { getContent } from "@data/server"
import { notFound as redirectToNotFound } from "next/navigation"
import { Fragment, JSX, type ReactNode } from "react"
import { isEmptyObject } from "@utils/server"

interface ResolverProps {
    dataPath: string | null
    dataType: "page" | "component"
}

type PossibleContent<T> = T | undefined

type ComponentNames = Lowercase<
    | "Markdown"
    | "Image"
    | "LastModified"
    | "Array"
    | "Link"
    | "Object"
    | "Attribution"
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
    LinkProps &
    ObjectComponentProps

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
    object: ({ data, type, ...rest }) =>
        data && type && <ObjectComponent data={data} type={type} {...rest} />,
    attribution: () => <Attribution />,
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

        return (content as ComponentMapEntry).components?.reduce(
            (acc, props, i) => {
                if (isEmptyObject(props)) return acc
                const { useReadPercentage, ...spreadProps } = props
                const Wrapper = useReadPercentage ? ReadPercentage : Fragment

                acc.push(
                    <Wrapper key={`${props?.name}-${i}`}>
                        {renderComponentMapEntry(componentMap, spreadProps)}
                    </Wrapper>
                )

                return acc
            },
            [] as JSX.Element[]
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
