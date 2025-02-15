import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import darkTheme from "react-syntax-highlighter/dist/esm/styles/prism/one-dark"

// TODO: write tests and improve typing
// @ts-ignore
const Code = (props) => {
    const { children, className, ...rest } = props
    const newLines = /\n$/
    const seperatedChildren = String(children).replace(newLines, "")
    const language = (className || "").split("-").pop()
    return language ? (
        <SyntaxHighlighter
            {...rest}
            language={language}
            showLineNumbers
            style={darkTheme}
        >
            {seperatedChildren}
        </SyntaxHighlighter>
    ) : (
        <code
            {...rest}
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
