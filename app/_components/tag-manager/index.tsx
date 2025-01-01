import Script from "next/script"

const gTagID = "G-6YHZM21N8W"
const tagManagerImplementation = `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gTagID}');
`
const TagManager = () => (
    <>
        <Script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gTagID}`}
            strategy="afterInteractive"
        />
        <Script id="gtag" strategy="afterInteractive">
            {tagManagerImplementation}
        </Script>
    </>
)

export default TagManager
