import NextImage, { type ImageProps as NextImageProps } from "next/image"
import "./image.css"

export type ImageProps = NextImageProps & {
    inline?: boolean
}

const Image = ({ src, inline, ...rest }: ImageProps) => {
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
        // TODO: will need to add the pagename header once firestore is set up with folders
        <NextImage
            src={`/assets${src}`}
            {...(shouldUseConditionalClasses && conditionalClasses)}
            {...sizingProps}
            {...rest}
        />
    )
}

export default Image
