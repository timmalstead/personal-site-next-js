import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { cookies, headers } from "next/headers"
import type { ColorMode, ReducedMotion, Browser, SettingsDismiss } from "_utils"
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
} from "_components"
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
    const getServerValue = <T extends unknown>({
        cookieName,
        headerName,
        defaultName,
    }: {
        cookieName?: string
        headerName?: string
        defaultName: T
    }): T => {
        const cookie = !!cookieName && cookies().get(cookieName)?.value
        const header = !!headerName && headers().get(headerName)
        return (cookie || header || defaultName) as T
    }

    const colorMode = getServerValue<ColorMode>({
        cookieName: "colorMode",
        headerName: "Sec-CH-Prefers-Color-Scheme",
        defaultName: "light",
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
                </UserSettings>
                <Footer />
                <TagManager />
            </body>
        </html>
    )
}

export default RootLayout
