import { NextRequest, NextResponse, userAgent } from "next/server"
import type { Browser } from "@utils"

const restrictedRoutes = ["/component-data"]

export const middleware = (request: NextRequest) => {
    const {
        nextUrl: { pathname },
    } = request

    const isApiRoute = pathname.startsWith("/api")
    if (isApiRoute) {
        const authHeaderVal = request.headers.get("Authorization")
        const authEnvVal = process.env.MIDDLEWARE_AUTHORIZATION
        if (authHeaderVal !== authEnvVal)
            return NextResponse.json({ error: "Unauthorized", status: 401 })
    }

    const { browser } = userAgent(request)
    const browserName = (
        (browser?.name as string) || ""
    ).toLowerCase() as Browser
    const pageName = pathname === "/" ? "home" : pathname.slice(1)

    const response = NextResponse.next()
    response.headers.set("X-Browser", browserName)
    response.headers.set("X-Pagename", pageName)

    const isRestrictedRoute = restrictedRoutes.some((route) =>
        pathname.startsWith(route)
    )
    if (isRestrictedRoute) {
        const redirectedUrl = request.nextUrl.clone()
        redirectedUrl.pathname = "/"
        return NextResponse.redirect(redirectedUrl, { status: 302 })
    }

    return response
}

// inspired by the docs https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
    matcher:
        "/((?!_next/static|_next/image|apple-icon.png|favicon.ico|icon.png|robots.txt).*)",
}
