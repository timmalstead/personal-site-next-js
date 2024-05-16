import NextLink from "next/link"
import ClientHeader from "./ClientHeader"
import { routes } from "../../_utils/constants"
import "./header.css"

const Header = () => (
    <ClientHeader>
        <div className="banner-container">
            <div className="fold" />
            <div className="banner">
                <NextLink title={routes[0].title} href={routes[0].path}>
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
