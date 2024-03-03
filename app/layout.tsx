import type { Metadata } from "next"
import { Noto_Sans } from "next/font/google"
import "./globals.css"

const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: { template: "%s | Timothy Malstead", default: "Timothy Malstead" },
    description:
        "The website of Timothy Malstead, a software engineer and artist from the United States.",
}

const RootLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode
}>) => (
    <html lang="en">
        <body className={notoSans.className}>{children}</body>
    </html>
)

export default RootLayout
