import ClientHeader from "./ClientHeader"
import { Link, Resolver as resolver } from "@components"
import type { Browser /*, Route */ } from "@utils"
import "./header.css"

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
