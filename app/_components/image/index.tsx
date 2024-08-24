import NextImage from "next/image"

type NextImageProps = typeof NextImage
interface ImageProps extends NextImageProps {
    src: string
    alt: string
    height?: number
    width?: number
}

// may be best to do this with a forwardRef
// google_search_console:w1917-h1014.png
// google_search_console.png

const Image = ({ src, alt }: ImageProps) => {
    return <img src={src || ""} alt={alt || ""} />
}

export default Image
