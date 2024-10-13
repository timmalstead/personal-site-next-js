import { NextRequest, NextResponse } from "next/server"
import { deleteContent } from "_data"
import { handleError } from "_utils"

export const DELETE = async (request: NextRequest) => {
    try {
        const { docPath }: { docPath: string } = await request.json()
        if (!docPath) throw new Error("No 'docPath' data provided")
        else {
            const result = await deleteContent(docPath)

            if (result.error) throw new Error(result.error)
            else return NextResponse.json(result)
        }
    } catch (error) {
        return NextResponse.json(handleError(error))
    }
}
