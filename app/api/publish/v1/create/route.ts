import { NextRequest, NextResponse } from "next/server"
import { setContent } from "_data"
import type { CreateArgs } from "_utils"

// TODO: better error handling and typing for all
export const POST = async (request: NextRequest) => {
    const postArgs: CreateArgs = await request.json()
    const { docPath, data } = postArgs

    if (docPath && data) {
        const result = await setContent(postArgs)
        return NextResponse.json({ result })
    } else
        return NextResponse.json({
            error: "Either no 'docPath' or 'data' data provided",
        })
}
