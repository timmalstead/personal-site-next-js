import "./last-modified.css"

interface LastModifiedProps {
    // epoch date the content was last modified
    lastModifiedDate: number
}

const LastModified = ({ lastModifiedDate }: LastModifiedProps) => (
    <p className="last-modified">
        This content was last modified on&nbsp;
        <em>{new Date(lastModifiedDate).toDateString()}</em>
    </p>
)

export default LastModified
