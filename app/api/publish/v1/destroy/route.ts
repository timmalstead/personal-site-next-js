import { NextRequest, NextResponse } from "next/server"
import { deleteContent } from "_data"

// TODO: better error handling and typing for all
export const DELETE = async (request: NextRequest) => {
    const { docPath }: { docPath: string } = await request.json()
    if (docPath) {
        const result = await deleteContent(docPath)
        return NextResponse.json(result)
    } else return NextResponse.json({ error: "No 'docPath' data provided" })
}
