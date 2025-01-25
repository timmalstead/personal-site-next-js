import NextLink, { type LinkProps as NextLinkProps } from "next/link"
import { AnchorHTMLAttributes, forwardRef, type ReactNode } from "react"

export type LinkProps = {
    children: ReactNode
    inline?: boolean
} & NextLinkProps &
    AnchorHTMLAttributes<HTMLAnchorElement>

const externalLinkPrefixes = ["http", "mailto"]

const Link = forwardRef<HTMLAnchorElement, LinkProps>(
    ({ children, inline, href, className, ...rest }, ref) => {
        const isExternalLink = externalLinkPrefixes.some((prefix) =>
            href.toString().startsWith(prefix)
        )
        const inlineClass = inline ? "inline" : ""
        return (
            <NextLink
                href={href}
                ref={ref}
                target={isExternalLink ? "_blank" : "_self"}
                className={`${className} ${inlineClass}`}
                prefetch={false}
                {...rest}
            >
                {children}
            </NextLink>
        )
    }
)
Link.displayName = "Link"

export default Link
