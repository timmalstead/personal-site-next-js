import { NextRequest, NextResponse } from "next/server"
import { getContent } from "&data/server"
import { sendError } from "&utils/server"

// below is not strictly necessary, but it avoids an annoying prod build error
export const dynamic = "force-dynamic"
export const GET = async (request: NextRequest) => {
    try {
        const docPath = request.nextUrl.searchParams.get("path")
        if (!docPath) throw new Error("No 'path' param provided")

        const content = await getContent<{ [key: string]: any }>(docPath)

        if (!content) throw new Error(`No data found at ${docPath}`)
        else if (content instanceof Error) throw content
        else return NextResponse.json({ content })
    } catch (error) {
        return sendError(error)
    }
}
