import ReactMarkdown, { type Options } from "react-markdown"
import { forwardRef } from "react"

// making children required
interface MarkdownOptions extends Options {
    children: string
}

// could this be a function that returns the config, with additional params passed in per instance of Markdown? Should it be?
// const componentsConfig: MarkdownOptions["components"] = {}

const Markdown = forwardRef<MarkdownOptions, MarkdownOptions>(
    ({ children, ...rest }, ref) => (
        // @ts-ignore ReactMarkdown does not have a ref prop
        <ReactMarkdown ref={ref} {...rest}>
            {children}
        </ReactMarkdown>
    )
)
Markdown.displayName = "Markdown"

export default Markdown
