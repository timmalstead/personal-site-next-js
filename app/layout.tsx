import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { Noto_Sans } from "next/font/google"
import {
    getServerValue,
    type ColorMode,
    type ReducedMotion,
    type Browser,
    type SettingsDismiss,
} from "@utils/server"
import {
    Header,
    Footer,
    TagManager,
    CurrentVersion,
    DevTools,
} from "@components/server"
import {
    UserSettings,
    ColorSwitcher,
    ReduceMotion,
    LayoutZoom,
    PinchZoom,
} from "@components/client"
import "./layout.css"

const notoSans = Noto_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: { template: "%s | Timothy Malstead", default: "Timothy Malstead" },
    description:
        "The website of Timothy Malstead, a software engineer and artist from the United States.",
    alternates: {
        canonical: "https://www.timothymalstead.com",
    },
}

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#42e3ff" },
        { media: "(prefers-color-scheme: light)", color: "#fff642" },
    ],
}

const RootLayout = async ({
    children,
}: Readonly<{
    children: ReactNode
}>) => {
    const [colorMode, reducedMotion, browser, userSettingsStatus] =
        await Promise.all([
            getServerValue<ColorMode>({
                cookieName: "colorMode",
                headerName: "Sec-CH-Prefers-Color-Scheme",
                defaultName: "dark",
            }),
            getServerValue<ReducedMotion>({
                cookieName: "reducedMotion",
                headerName: "Sec-CH-Prefers-Reduced-Motion",
                defaultName: "no-preference",
            }),
            getServerValue<Browser>({
                headerName: "X-Browser",
                defaultName: "chrome",
            }),
            getServerValue<SettingsDismiss>({
                cookieName: "userSettings",
                defaultName: "closed",
            }),
        ])

    // it's a bummer, but the layout zoom only seems to work in Chrome
    // which is funny considering that I copied it from MDN
    const isChrome = browser === "chrome" || browser === "chromium"

    return (
        <html dir="ltr" lang="en" className={`${colorMode} ${reducedMotion}`}>
            <body className={notoSans.className} data-testid="background">
                <Header browser={browser} />
                {children}
                <UserSettings userSettingsStatusProp={userSettingsStatus}>
                    <DevTools>
                        <PinchZoom />
                        {isChrome && <LayoutZoom />}
                        <CurrentVersion />
                    </DevTools>
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
