import "./footer.css"

const copyRight = `© 2019 - ${new Date().getFullYear()} by Timothy Malstead - All Rights Reserved`
const tempLinks = ["blibbity", "blah", "foo", "bar"]

const Footer = () => (
    <footer>
        {Boolean(tempLinks.length) && (
            <nav>
                <ul>
                    {tempLinks.map((link) => (
                        <li key={link}>
                            <span>{link}</span>
                        </li>
                    ))}
                </ul>
            </nav>
        )}
        <span>{copyRight}</span>
    </footer>
)

export default Footer
