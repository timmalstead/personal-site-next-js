import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Noto_Sans } from "next/font/google"
import Header from "./components/header"
import Footer from "./components/footer"
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
}>) => (
    <html lang="en">
        <body className={notoSans.className}>
            <Header />
            {children}
            <Footer />
        </body>
    </html>
)

export default RootLayout
