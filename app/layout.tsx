import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { getServerValue } from "@utils/server"
import type { ColorMode, ReducedMotion, Browser, SettingsDismiss } from "@utils"
import { Noto_Sans } from "next/font/google"
import {
    Header,
    Footer,
    UserSettings,
    ColorSwitcher,
    ReduceMotion,
    LayoutZoom,
    PinchZoom,
    TagManager,
    CurrentVersion,
} from "_components"
import "./globals.css"

const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: { template: "%s | Timothy Malstead", default: "Timothy Malstead" },
    description:
        "The website of Timothy Malstead, a software engineer and artist from the United States.",
    icons: [
        {
            rel: "icon",
            sizes: "48x48",
            url: "/favicon.ico",
        },
        {
            rel: "apple-touch-icon",
            sizes: "180x180",
            url: "/apple-icon.png",
            type: "image/png",
        },
        {
            rel: "icon",
            sizes: "180x180",
            url: "/icon.png",
            type: "image/png",
        },
    ],
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#42e3ff" },
        { media: "(prefers-color-scheme: light)", color: "#fff642" },
    ],
}

const RootLayout = ({
    children,
}: Readonly<{
    children: ReactNode
}>) => {
    const colorMode = getServerValue<ColorMode>({
        cookieName: "colorMode",
        headerName: "Sec-CH-Prefers-Color-Scheme",
        defaultName: "dark",
    })

    const reducedMotion = getServerValue<ReducedMotion>({
        cookieName: "reducedMotion",
        headerName: "Sec-CH-Prefers-Reduced-Motion",
        defaultName: "no-preference",
    })

    const browser = getServerValue<Browser>({
        headerName: "X-Browser",
        defaultName: "chrome",
    })

    const userSettingsStatus = getServerValue<SettingsDismiss>({
        cookieName: "userSettings",
        defaultName: "open",
    })
    // it's a bummer, but the layout zoom only seems to work in Chrome
    // which is funny considering that I copied it from MDN
    const isChrome = browser === "chrome" || browser === "chromium"

    return (
        <html dir="ltr" lang="en" className={`${colorMode} ${reducedMotion}`}>
            <body className={notoSans.className} data-testid="background">
                <Header browser={browser} />
                {children}
                <UserSettings userSettingsStatusProp={userSettingsStatus}>
                    <PinchZoom />
                    {isChrome && <LayoutZoom />}
                    <ReduceMotion reducedMotionProp={reducedMotion} />
                    <ColorSwitcher colorModeProp={colorMode} />
                    <CurrentVersion />
                </UserSettings>
                <Footer />
                <TagManager />
            </body>
        </html>
    )
}

export default RootLayout
