import type { JSX } from "react"
import {
    Resolver as resolver,
    Link,
    EmailLogo,
    MastodonLogo,
    BlueskyLogo,
    type LogoProps,
} from "@components/server"

type LogoLinkProps = {
    key: string
    href: string
    Logo: (props: LogoProps) => JSX.Element
} & LogoProps

const copyRight = `© 2019 - ${new Date().getFullYear()} by Timothy Malstead - All Rights Reserved`

export const sharedFooterLogoProps: LogoProps = {
    width: "20",
    height: "20",
    fill: "var(--text-color)",
}
const logos: LogoLinkProps[] = [
    {
        ...sharedFooterLogoProps,
        key: "Email",
        href: "mailto:timmalstead@gmail.com",
        Logo: (props) => <EmailLogo {...props} />,
    },
    {
        ...sharedFooterLogoProps,
        key: "Mastodon",
        href: "https://mastodon.social/@timothymalstead",
        Logo: (props) => <MastodonLogo {...props} />,
    },
    {
        ...sharedFooterLogoProps,
        key: "Bluesky",
        href: "https://bsky.app/profile/timmalstead.bsky.social",
        Logo: (props) => <BlueskyLogo {...props} />,
    },
]

const Footer = async () => {
    const footerLinks = await resolver({
        dataPath: "footer",
        dataType: "component",
    })
    return (
        <footer>
            {Boolean(footerLinks?.length || logos?.length) && (
                <nav>
                    {Boolean(footerLinks?.length) && (
                        <ul>
                            {footerLinks?.map((link) => (
                                <li key={link.key}>{link}</li>
                            ))}
                        </ul>
                    )}
                    {Boolean(logos?.length) && (
                        <ul className="logos">
                            {logos?.map(({ key, href, Logo, ...logoProps }) => (
                                <li key={key} title={key}>
                                    <Link href={href}>
                                        <Logo {...logoProps} />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </nav>
            )}
            <span>{copyRight}</span>
        </footer>
    )
}

export default Footer
