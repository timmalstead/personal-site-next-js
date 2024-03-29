import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import type { ColorMode } from "./types"
import { Noto_Sans } from "next/font/google"
import { cookies, headers } from "next/headers"
import Header from "./components/header"
import Footer from "./components/footer"
import ColorSwitcher from "./components/color-switcher"
import "./globals.css"

const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: { template: "%s | Timothy Malstead", default: "Timothy Malstead" },
    description:
        "The website of Timothy Malstead, a software engineer and artist from the United States.",
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
}

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode
}>) => {
    const colorModeCookie = cookies().get("colorMode")?.value
    const colorModeHeader = headers().get("Sec-CH-Prefers-Color-Scheme")
    const colorModeDefault = "light"

    const colorMode = colorModeCookie || colorModeHeader || colorModeDefault
    return (
        <html lang="en" className={colorMode}>
            <body className={notoSans.className}>
                <Header />
                <ColorSwitcher colorModeProp={colorMode as ColorMode} />
                {children}
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
