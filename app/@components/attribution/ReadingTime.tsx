"use client"
import { useEffect, useState } from "react"

const AVERAGE_READING_SPEED = 240 // words per minute
const [TRAILING_HASHES, SPACES] = [/#$/, /\s+/]

const assembleChildrenText = (acc: string, node: Node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
        const { innerText } = node as HTMLElement
        const strippedText = innerText.replace(TRAILING_HASHES, "").trim()
        acc += `${strippedText} `
    }
    return acc
}

const ReadingTime = () => {
    const [readingTime, setReadingTime] = useState<number | null>(null)
    useEffect(() => {
        const mainNodeChildren = document.querySelector("main")?.childNodes
        if (mainNodeChildren?.length) {
            const childrenText = Array.from(mainNodeChildren).reduce(
                assembleChildrenText,
                ""
            )
            const wordCount = childrenText.split(SPACES).length

            if (wordCount)
                setReadingTime(Math.ceil(wordCount / AVERAGE_READING_SPEED))
        }
    }, [])

    return <span>{readingTime || 0} minute read</span>
}

export default ReadingTime
