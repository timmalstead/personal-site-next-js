import NextLink, { type LinkProps as NextLinkProps } from "next/link"
import { AnchorHTMLAttributes, forwardRef, type ReactNode } from "react"

export type LinkProps = {
    children: ReactNode
    inline?: boolean
} & NextLinkProps &
    AnchorHTMLAttributes<HTMLAnchorElement>

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ children, inline, href, className, ...rest }, ref) => {
        const isExternalLink = href.toString().startsWith("http")
        const inlineClass = inline ? "inline" : ""
        return (
            <NextLink
                href={href}
                ref={ref}
                target={isExternalLink ? "_blank" : "_self"}
                className={`${className} ${inlineClass}`}
                {...rest}
            >
                {children}
            </NextLink>
        )
    }
)
Link.displayName = "Link"

export default Link
