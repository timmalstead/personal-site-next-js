import NextImage, { type ImageProps as NextImageProps } from "next/image"
import { headers } from "next/headers"
import "./image.css"

export type ImageProps = NextImageProps & {
    name?: string
    inline?: boolean
}

// unpacking name so it will not be passed to the NextImage component
const Image = ({ src, inline, name: _name, ...rest }: ImageProps) => {
    // for static src imports
    if (typeof src !== "string")
        return (
            <NextImage
                src={src}
                {...(inline && { className: "inline" })}
                {...rest}
            />
        )
    // for remote src
    const imagePath = headers().get("X-Pagename")
    const [startOfSlice, endOfSlice] = [src.indexOf(":") + 1, src.indexOf(".")]
    const widthAndHeight = src.slice(startOfSlice, endOfSlice)?.split("-")

    const measurements = widthAndHeight?.reduce(
        (dimensions, widthOrHeightString) => {
            const firstChar = widthOrHeightString[0]?.toLowerCase() as "w" | "h"
            dimensions[firstChar] = Number.parseInt(
                widthOrHeightString.slice(1)
            )
            return dimensions
        },
        { w: NaN, h: NaN }
    )

    const hasWidthAndHeight =
        Number.isInteger(measurements?.w) && Number.isInteger(measurements?.h)

    const sizingProps: Pick<NextImageProps, "width" | "height" | "fill"> =
        hasWidthAndHeight
            ? { width: measurements.w, height: measurements.h }
            : { fill: true }

    const shouldUseConditionalClasses = !hasWidthAndHeight || inline
    const conditionalClasses = {
        className: `${!hasWidthAndHeight && "fill-override"} ${inline && "inline"}`,
    }
    return (
        <NextImage
            src={`/assets/${imagePath}${src}`}
            {...(shouldUseConditionalClasses && conditionalClasses)}
            {...sizingProps}
            {...rest}
        />
    )
}

export default Image
