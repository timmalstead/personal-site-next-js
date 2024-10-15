import { NextRequest, NextResponse } from "next/server"
import { setContent } from "_data"
import { handleError, type CreateArgs } from "_utils"

export const POST = async (request: NextRequest) => {
    try {
        const postArgs: CreateArgs = await request.json()
        const { docPath, data } = postArgs

        if (!docPath || !data)
            throw new Error("Either no 'docPath' or 'data' data provided")

        const result = await setContent(postArgs)
        if (result.error) throw new Error(result.error)
        else return NextResponse.json(result)
    } catch (error) {
        return NextResponse.json(handleError(error))
    }
}
