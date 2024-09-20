import type { ReactNode, DetailedHTMLProps, HTMLAttributes } from "react"
import "./heading.css"
import CopyButton from "./CopyButton"
import { Link } from "_components"

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
type HeadingHash = {
    [level in HeadingLevel]: (
        props: DetailedHTMLProps<
            HTMLAttributes<HTMLHeadingElement>,
            HTMLHeadingElement
        >
    ) => JSX.Element
}
interface HeadingProps {
    level: HeadingLevel
    children: ReactNode
    copy?: boolean
}

const headings: HeadingHash = {
    h1: (props) => <h1 {...props} />,
    h2: (props) => <h2 {...props} />,
    h3: (props) => <h3 {...props} />,
    h4: (props) => <h4 {...props} />,
    h5: (props) => <h5 {...props} />,
    h6: (props) => <h6 {...props} />,
}

const [allCharsNotSpacesNumbersOrLowerCaseLetters, spaces] = [
    /[^a-z0-9\s]/g,
    /\s{1,}/g,
]
const Heading = ({ level, children, copy }: HeadingProps) => {
    const HeadingText = headings[level]

    const id =
        typeof children === "string"
            ? children
                  .toLowerCase()
                  .trim()
                  .replace(allCharsNotSpacesNumbersOrLowerCaseLetters, "")
                  .replace(spaces, "-")
            : ""

    const shouldDisplayCopy = Boolean(copy && id)
    return (
        <div id={id} className="heading-component">
            <HeadingText>{children}</HeadingText>
            {shouldDisplayCopy && (
                <>
                    <CopyButton id={id} />
                    <Link title={id} href={`#${id}`}>
                        #
                    </Link>
                </>
            )}
        </div>
    )
}

export default Heading
