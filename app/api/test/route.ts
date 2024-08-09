import { NextRequest, NextResponse } from "next/server"
import { getContent } from "../../_utils/firestore"
import { headers } from "next/headers"

export const dynamic = "force-dynamic"
export const GET = async (request: NextRequest) => {
    const pageName = headers().get("X-Pagename") as string
    const firestoreData = await getContent<{
        title: string
        important: boolean
    }>(pageName)

    return NextResponse.json({
        pageName,
        request,
        firestoreData,
    })
}
