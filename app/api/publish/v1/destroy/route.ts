import { NextRequest, NextResponse } from "next/server"
import { deleteContent } from "@data"
import { sendError } from "@utils"

export const DELETE = async (request: NextRequest) => {
    try {
        const { docPath }: { docPath: string } = await request.json()
        if (!docPath) throw new Error("No 'docPath' data provided")
        else {
            const result = await deleteContent(docPath)

            if (result instanceof Error) throw result
            else return NextResponse.json(result)
        }
    } catch (error) {
        return sendError(error)
    }
}
