"use client"
import { useEffect, useState } from "react"

const AVERAGE_READING_SPEED = 240 // words per minute
const [NEWLINES, SPACES] = [/\n+/g, /\s+/]

/**
 * Custom React hook to calculate the estimated reading time for the text content
 * of an HTML element selected by a CSS selector.
 *
 * @param {string} cssSelector - The CSS selector of the HTML element whose text content
 *                               will be used to calculate the reading time.
 * @returns {number | null} - The estimated reading time in minutes, or null if the text
 *                            content is not available or cannot be calculated.
 */
export const useReadingTime = (cssSelector: string) => {
    const [readingTime, setReadingTime] = useState<number | null>(null)
    useEffect(() => {
        const mainChildText = (
            document.querySelector(cssSelector) as HTMLElement | null
        )?.innerText
        const strippedText = mainChildText?.replaceAll(NEWLINES, " ")

        if (strippedText?.length) {
            const wordCount = strippedText.split(SPACES).length
            if (wordCount)
                setReadingTime(Math.ceil(wordCount / AVERAGE_READING_SPEED))
        }
    }, [])

    return readingTime
}
