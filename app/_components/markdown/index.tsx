import ReactMarkdown, { type Options } from "react-markdown"
import NextLink from "next/link"
import Heading from "../heading"
import { forwardRef } from "react"

// making children required
interface MarkdownOptions extends Options {
    children: string
}

// could this be a function that returns the config, with additional params passed in per instance of Markdown? Should it be?
const componentsConfig: MarkdownOptions["components"] = {
    h1: ({ children }) => <Heading level="h1">{children}</Heading>,
    h2: ({ children }) => (
        <Heading level="h2" copy>
            {children}
        </Heading>
    ),
    h3: ({ children }) => <Heading level="h3">{children}</Heading>,
    h4: ({ children }) => <Heading level="h4">{children}</Heading>,
    h5: ({ children }) => <Heading level="h5">{children}</Heading>,
    h6: ({ children }) => <Heading level="h6">{children}</Heading>,
    a: ({ href, children }) => {
        const isExternalLink = (href as string).startsWith("http")
        return (
            <NextLink
                target={isExternalLink ? "_blank" : "_self"}
                className="inline"
                href={href as string}
            >
                {children}
            </NextLink>
        )
    },
}

const Markdown = forwardRef<MarkdownOptions, MarkdownOptions>(
    ({ children, ...rest }, ref) => (
        // @ts-ignore ReactMarkdown does not have a ref prop
        <ReactMarkdown components={componentsConfig} ref={ref} {...rest}>
            {children}
        </ReactMarkdown>
    )
)
Markdown.displayName = "Markdown"

export default Markdown
