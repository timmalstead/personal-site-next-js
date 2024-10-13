import { NextRequest, NextResponse } from "next/server"
import { getContent } from "_data"
import { handleError } from "_utils"

export const GET = async (request: NextRequest) => {
    try {
        const docPath = request.nextUrl.searchParams.get("path")
        if (docPath) {
            const content = await getContent<{ [key: string]: any }>(docPath)
            const result = content
                ? { content }
                : { error: `No data found at ${docPath}` }
            return NextResponse.json(result)
        } else throw new Error("No 'path' param provided")
    } catch (error) {
        return NextResponse.json(handleError(error))
    }
}
