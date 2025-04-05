"use client"
import { useEffect, useState } from "react"

const AVERAGE_READING_SPEED = 240 // words per minute
const [NEWLINES, SPACES] = [/\n+/g, /\s+/]

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
