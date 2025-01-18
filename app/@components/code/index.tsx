"use client"
import { useState, useEffect } from "react"
import type { ColorMode } from "@utils"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark, prism } from "react-syntax-highlighter/dist/esm/styles/prism"

// TODO: may be worth it to put this data into a context for a possible speed advantage
// TODO: write tests for this
// TODO: improve typing
const themes = {
    dark: oneDark,
    light: prism,
}

// @ts-ignore
const Code = (props) => {
    const [color, setColor] = useState<ColorMode | null>(null)

    const assignColorMode = (className: string) =>
        setColor(className.includes("dark") ? "dark" : "light")

    useEffect(() => {
        const htmlElement = document.documentElement
        assignColorMode(htmlElement.className)

        const observer = new MutationObserver((mutations) => {
            mutations.forEach(({ target }) => {
                const { className } = target as Element
                assignColorMode(className)
            })
        })

        observer.observe(htmlElement, {
            attributes: true,
            attributeFilter: ["class"],
        })

        return () => observer.disconnect()
    }, [])

    const { children, className, ...rest } = props
    const newLines = /\n$/
    const seperatedChildren = String(children).replace(newLines, "")
    const language = (className || "").split("-").pop()
    return language ? (
        <div style={{ visibility: color ? "visible" : "hidden" }}>
            <SyntaxHighlighter
                {...rest}
                language={language}
                showLineNumbers
                style={themes[color as ColorMode]}
            >
                {seperatedChildren}
            </SyntaxHighlighter>
        </div>
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
