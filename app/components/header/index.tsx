import NextLink from "next/link"
import ClientHeader from "./ClientHeader"
import { routes } from "../../constants"
import "./header.css"

const Header = () => (
    <ClientHeader>
        <div className="banner-container">
            <div className="fold" />
            <div className="banner">
                <NextLink href={routes[0].path}>Timothy Malstead</NextLink>
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
            <span>color theme switcher</span>
        </nav>
    </ClientHeader>
)

export default Header
