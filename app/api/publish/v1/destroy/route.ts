import { NextRequest, NextResponse } from "next/server"
import { deleteContent } from "_data"
import { handleError } from "_utils"

// TODO: better error handling and typing for all
export const DELETE = async (request: NextRequest) => {
    try {
        const { docPath }: { docPath: string } = await request.json()
        if (docPath) {
            const result = await deleteContent(docPath)
            return NextResponse.json(result)
        } else throw new Error("No 'docPath' data provided")
    } catch (error) {
        return NextResponse.json(handleError(error))
    }
}
