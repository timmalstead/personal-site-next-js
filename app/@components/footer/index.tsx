import {
    Resolver as resolver,
    Link,
    EmailLogo,
    MastodonLogo,
    BlueskyLogo,
    type LogoProps,
} from "@components/server"

const copyRight = `© 2019 - ${new Date().getFullYear()} by Timothy Malstead - All Rights Reserved`

const sharedProps = { width: "20", height: "20", fill: "var(--text-color)" }
const logos = [
    {
        ...sharedProps,
        key: "Email",
        href: "mailto:timmalstead@gmail.com",
        Logo: (props: LogoProps) => <EmailLogo {...props} />,
    },
    {
        ...sharedProps,
        key: "Mastodon",
        href: "https://mastodon.social/@timothymalstead",
        Logo: (props: LogoProps) => <MastodonLogo {...props} />,
    },
    {
        ...sharedProps,
        key: "Bluesky",
        href: "https://bsky.app/profile/timmalstead.bsky.social",
        Logo: (props: LogoProps) => <BlueskyLogo {...props} />,
    },
]

const Footer = async () => {
    const footerLinks = await resolver({
        dataPath: "footer",
        dataType: "component",
    })
    return (
        <footer>
            {Boolean(footerLinks?.length) && (
                <nav>
                    <ul>
                        {footerLinks?.map((link) => (
                            <li key={link.key}>{link}</li>
                        ))}
                    </ul>
                    <ul className="logos">
                        {logos?.map(({ key, href, Logo, ...logoProps }) => (
                            <li key={key} title={key}>
                                <Link href={href}>
                                    <Logo {...logoProps} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
            <span>{copyRight}</span>
        </footer>
    )
}

export default Footer
