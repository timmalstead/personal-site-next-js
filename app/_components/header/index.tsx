import NextLink from "next/link"
import ClientHeader from "./ClientHeader"
import type { Browser, Route } from "../../_utils/sharedTypes"
import "./header.css"

// should this be a fallback? maybe get this from firestore as a rule?
export const routes: Route[] = [
    { path: "/about", title: "about" },
    { path: "/blog", title: "blog" },
]

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
                    title={"home"}
                    href={"/"}
                >
                    timothy_malstead
                </NextLink>
            </div>
            <div className="fold" />
        </div>
        <nav>
            <ul>
                {routes.map(({ path, title }) => (
                    <li key={path}>
                        <NextLink href={path}>{title}</NextLink>
                    </li>
                ))}
            </ul>
        </nav>
    </ClientHeader>
)

export default Header
