import { Resolver as resolver } from "_components"
import "./footer.css"

const copyRight = `© 2019 - ${new Date().getFullYear()} by Timothy Malstead - All Rights Reserved`

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
                            <li key={link.toString()}>{link}</li>
                        ))}
                    </ul>
                </nav>
            )}
            <span>{copyRight}</span>
        </footer>
    )
}

export default Footer
