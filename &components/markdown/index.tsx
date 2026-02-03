import ReactMarkdown, { type Options } from "react-markdown"
import { Heading, Image, Link, Code } from "&components/server"
import { forwardRef } from "react"

// making children required
interface MarkdownOptions extends Options {
    children: string
}

const componentsConfig: MarkdownOptions["components"] = {
    h1: ({ children }) => <Heading level="h1">{children}</Heading>,
    h2: ({ children }) => (
        <Heading level="h2" hash>
            {children}
        </Heading>
    ),
    h3: ({ children }) => <Heading level="h3">{children}</Heading>,
    h4: ({ children }) => <Heading level="h4">{children}</Heading>,
    h5: ({ children }) => <Heading level="h5">{children}</Heading>,
    h6: ({ children }) => <Heading level="h6">{children}</Heading>,
    a: ({ href, children }) =>
        href && (
            <Link inline href={href}>
                {children}
            </Link>
        ),

    img: ({ src, alt, title }) =>
        src && <Image src={src} alt={alt || ""} title={title} />,
    ul: ({ children }) => (
        <ul style={{ padding: "0 4rem", marginBottom: "1.5rem" }}>
            {children}
        </ul>
    ),
    code: ({ node, ...rest }) => <Code {...rest} />,
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
