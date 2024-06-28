import { NextRequest, NextResponse, userAgent } from "next/server"
import type { Browser } from "./app/_utils/sharedTypes"

export const middleware = (request: NextRequest) => {
    const {
        nextUrl: { pathname },
    } = request

    if (pathname.startsWith("/api")) {
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
    const response = NextResponse.next()
    response.headers.set("X-Browser", browserName)
    return response
}

export const config = {
    matcher: "/(.*)",
}
