import { NextRequest, NextResponse } from "next/server"
import { getContent } from "_data"

// TODO: better error handling and typing for all
export const GET = async (request: NextRequest) => {
    const docPath = request.nextUrl.searchParams.get("path")
    if (docPath) {
        const content = await getContent<{ [key: string]: any }>(docPath)
        const result = content
            ? { content }
            : { error: `No data found at ${docPath}` }
        return NextResponse.json(result)
    } else return NextResponse.json({ error: "No 'path' param provided" })
}
