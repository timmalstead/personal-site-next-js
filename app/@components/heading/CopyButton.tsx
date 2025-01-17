"use client"
import Copy from "./CopyIcon"

interface CopyButtonProps {
    id: string
}

const CopyButton = ({ id }: CopyButtonProps) => {
    const copyId = () => {
        const { href } = location
        const url = href.includes("#") ? href.split("#")[0] : href
        navigator.clipboard.writeText(`${url}#${id}`)
    }

    return (
        <button onClick={copyId} title="Copy Heading Address">
            <Copy />
        </button>
    )
}

export default CopyButton
