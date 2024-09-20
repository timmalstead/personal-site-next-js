import ClientHeader from "./ClientHeader"
import { Link, Resolver as resolver } from "_components"
import type { Browser /*, Route */ } from "_utils"
import "./header.css"

// TODO: should the below info be available to the resolver as a backup?
// const routes: Route[] = [
//     { path: "/about", title: "about" },
//     { path: "/blog", title: "blog" },
// ]

interface HeaderProps {
    browser: Browser
}

const Header = async ({ browser }: HeaderProps) => {
    const headerLinks = await resolver({
        dataPath: "header",
        dataType: "component",
    })
    return (
        <ClientHeader>
            <div className="banner-container">
                <div className="fold" />
                <div className="banner">
                    <Link
                        className={browser === "safari" ? "is-safari" : ""}
                        title={"home"}
                        href={"/"}
                    >
                        timothy_malstead
                    </Link>
                </div>
                <div className="fold" />
            </div>
            <nav>
                <ul>
                    {headerLinks?.map((link) => <li key={link.key}>{link}</li>)}
                </ul>
            </nav>
        </ClientHeader>
    )
}

export default Header
