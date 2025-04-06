const [NEWLINES, SPACES] = [/\n+/g, /\s+/]

const mainChildText = document.querySelector("main")?.innerText
const strippedText = mainChildText?.replaceAll(NEWLINES, " ")

if (strippedText?.length) {
    const wordCount = strippedText.split(SPACES).length
    if (wordCount) {
        const [THREE_SECONDS, AVERAGE_READING_SPEED] = [3000, 240] // words read per minute

        const readingTime = Math.ceil(wordCount / AVERAGE_READING_SPEED)
        const readingTimeText = `READING TIME: ${readingTime} MINUTES`

        const alertDiv = document.createElement("div")
        alertDiv.innerText = readingTimeText

        const alertStyles = {
            position: "fixed",
            top: "10px",
            left: "10px",
            padding: "10px",
            zIndex: "1000",
            backgroundColor: "rgb(49, 49, 49)",
            maxWidth: "300px",
            maxHeight: "200px",
            color: "rgb(173, 173, 173)",
            fontFamily: "monospace",
        }

        for (const [key, value] of Object.entries(alertStyles))
            alertDiv.style[key] = value

        document.querySelector("body").prepend(alertDiv)

        setTimeout(() => alertDiv.remove(), THREE_SECONDS)

        console.log(readingTimeText)
        readingTimeText
    }
}
