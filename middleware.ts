import { NextRequest, NextResponse, userAgent } from "next/server"

export const middleware = (request: NextRequest) => {
    // This middleware sets a header to indicate if the user agent is Safari
    const { browser } = userAgent(request)
    const isSafariAsNum = Number(
        browser.name?.toLowerCase() === "safari"
    ).toString()
    const response = NextResponse.next()
    response.headers.set("x-is-safari", isSafariAsNum)
    return response
}

export const config = {
    matcher: "/(.*)",
}
