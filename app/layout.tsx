import type { Metadata, Viewport } from "next"
import type { ReactNode } from "react"
import { cookies, headers } from "next/headers"
import type { ColorMode, ReducedMotion } from "./_utils/sharedTypes"
import { Noto_Sans } from "next/font/google"
import {
    Header,
    Footer,
    UserSettings,
    ColorSwitcher,
    ReduceMotion,
    LayoutZoom,
    PinchZoom,
} from "./_components"
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

    // value is 0 or 1 as a string as that is the header convention
    const isSafari = getServerValue<string>({
        headerName: "x-is-safari",
        defaultName: "1",
    })

    return (
        <html dir="ltr" lang="en" className={`${colorMode} ${reducedMotion}`}>
            <body className={notoSans.className} data-testid="background">
                <Header isSafari={Boolean(+isSafari)} />
                {children}
                <UserSettings>
                    <PinchZoom />
                    <LayoutZoom />
                    <ReduceMotion reducedMotionProp={reducedMotion} />
                    <ColorSwitcher colorModeProp={colorMode} />
                </UserSettings>
                <Footer />
            </body>
        </html>
    )
}

export default RootLayout
