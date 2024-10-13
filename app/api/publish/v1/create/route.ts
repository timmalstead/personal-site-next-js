import { NextRequest, NextResponse } from "next/server"
import { setContent } from "_data"
import { handleError, type CreateArgs } from "_utils"

export const POST = async (request: NextRequest) => {
    try {
        const postArgs: CreateArgs = await request.json()
        const { docPath, data } = postArgs

        if (docPath && data) {
            const result = await setContent(postArgs)
            return NextResponse.json({ result })
        } else throw new Error("Either no 'docPath' or 'data' data provided")
    } catch (error) {
        return NextResponse.json(handleError(error))
    }
}
