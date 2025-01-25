import Script from "next/script"

const gTagID = "G-6YHZM21N8W"

const shouldLoadTagManager =
    process.env?.NODE_ENV === "production" && process.env?.ACTIVE_ENV === "prod"

const TagManager = () =>
    shouldLoadTagManager ? (
        <>
            <Script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${gTagID}`}
                strategy="afterInteractive"
            />
            <Script id="gtag" strategy="afterInteractive">
                {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gTagID}');`}
            </Script>
        </>
    ) : (
        <></>
    )

export default TagManager
