import NextLink from "next/link"
import ClientHeader from "./ClientHeader"
import { routes } from "../../_utils/routes"
import type { Browser } from "../../_utils/sharedTypes"
import "./header.css"

interface HeaderProps {
    browser: Browser
}

const Header = ({ browser }: HeaderProps) => (
    <ClientHeader>
        <div className="banner-container">
            <div className="fold" />
            <div className="banner">
                <NextLink
                    className={browser === "safari" ? "is-safari" : ""}
                    title={routes[0].title}
                    href={routes[0].path}
                >
                    timothy_malstead
                </NextLink>
            </div>
            <div className="fold" />
        </div>
        <nav>
            <ul>
                {routes.slice(1).map(({ path, title }) => (
                    <li key={path}>
                        <NextLink href={path}>{title}</NextLink>
                    </li>
                ))}
            </ul>
        </nav>
    </ClientHeader>
)

export default Header
