import { NextRequest, NextResponse, userAgent } from "next/server"
import type { Browser } from "./app/_utils/sharedTypes"

export const middleware = (request: NextRequest) => {
    const {
        nextUrl: { pathname },
    } = request

    const isApiRoute = pathname.startsWith("/api")
    if (isApiRoute) {
        const authHeaderVal = request.headers.get("Authorization")
        const authEnvVal = process.env.MIDDLEWARE_AUTHORIZATION
        return authHeaderVal === authEnvVal
            ? NextResponse.next()
            : NextResponse.json({ error: "Unauthorized", status: 401 })
    }

    const { browser } = userAgent(request)
    const browserName = (
        (browser?.name as string) || ""
    ).toLowerCase() as Browser
    const pageName = pathname === "/" ? "home" : pathname.slice(1)

    const response = NextResponse.next()
    response.headers.set("X-Browser", browserName)
    response.headers.set("X-Pagename", pageName)

    return response
}

export const config = {
    matcher: "/(.*)",
}
