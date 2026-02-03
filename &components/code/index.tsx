import {
    Prism as SyntaxHighlighter,
    type SyntaxHighlighterProps,
} from "react-syntax-highlighter"
import darkTheme from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"
import type { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react"

// this is the most specific typing I can get for the HTML code element as far as I can tell...
type HTMLCodeProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
type CodeComponentProps = {
    children?: ReactNode
} & (SyntaxHighlighterProps | HTMLCodeProps)

// TODO: write more tests
const Code = ({ children, className, ...rest }: CodeComponentProps) => {
    const newLines = /\n$/
    const seperatedChildren = String(children).replace(newLines, "")
    const language = (className || "").split("-").pop()

    return language ? (
        <SyntaxHighlighter
            {...(rest as SyntaxHighlighterProps)}
            language={language}
            showLineNumbers
            style={darkTheme}
        >
            {seperatedChildren}
        </SyntaxHighlighter>
    ) : (
        <code
            {...(rest as HTMLCodeProps)}
            className={className}
            style={{
                color: "var(--code-text-color)",
                backgroundColor: "var(--code-background-color)",
            }}
        >
            {children}
        </code>
    )
}

export default Code
