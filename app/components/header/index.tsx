import { routes } from "../../constants"
import NextLink from "next/link"
import "./header.css"

const Header = () => (
    <header>
        <div className="polygon" />
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
