import { NextRequest, NextResponse } from "next/server"
import { setContent } from "@data/server"
import { sendError, type CreateArgs } from "@utils/server"

export const POST = async (request: NextRequest) => {
    try {
        const postArgs: CreateArgs = await request.json()
        const { docPath, data } = postArgs

        if (!docPath || !data)
            throw new Error("Either no 'docPath' or 'data' data provided")

        const result = await setContent(postArgs)
        if (result instanceof Error) throw result
        else return NextResponse.json(result)
    } catch (error) {
        return sendError(error)
    }
}
