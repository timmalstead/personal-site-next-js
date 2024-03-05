import NextLink from "next/link"
import { routes } from "../../constants"
import "./header.css"

// use intersection observer && figure out if mouse is going down or up
const Header = () => (
    <header>
        <div className="banner-container">
            <div className="fold" />
            <div className="banner" />
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
    </header>
)

export default Header
