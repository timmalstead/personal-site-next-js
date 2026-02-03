"use client"
import { useReadingTime } from "&utils/client"

const ReadingTime = () => {
    const readingTime = useReadingTime("main")

    return <span>{readingTime || 0} minute read</span>
}

export default ReadingTime
