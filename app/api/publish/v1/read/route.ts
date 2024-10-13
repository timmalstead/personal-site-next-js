import { NextRequest, NextResponse } from "next/server"
import { getContent } from "_data"
import { handleError } from "_utils"

export const GET = async (request: NextRequest) => {
    try {
        const docPath = request.nextUrl.searchParams.get("path")
        if (!docPath) throw new Error("No 'path' param provided")

        const content = await getContent<{ [key: string]: any }>(docPath)

        if (!content) throw new Error(`No data found at ${docPath}`)
        else if (content.error) throw new Error(content.error)
        else return NextResponse.json({ content })
    } catch (error) {
        return NextResponse.json(handleError(error))
    }
}
