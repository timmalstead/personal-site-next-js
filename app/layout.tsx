import type { Metadata } from "next"
import type { ReactNode } from "react"
import { Noto_Sans } from "next/font/google"
import Header from "./components/header"
import "./globals.css"

const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: { template: "%s | Timothy Malstead", default: "Timothy Malstead" },
    description:
        "The website of Timothy Malstead, a software engineer and artist from the United States.",
    viewport: "width=device-width, initial-scale=1.0",
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
        </body>
    </html>
)

export default RootLayout
