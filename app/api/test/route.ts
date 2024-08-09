import { NextRequest, NextResponse } from "next/server"
import { getContent } from "../../_utils/firestore"
import { headers } from "next/headers"

export const dynamic = "force-dynamic"
export const GET = async (request: NextRequest) => {
    const firestoreData = await getContent<{
        title: string
        important: boolean
    }>(headers().get("X-Pagename") as string)

    return NextResponse.json({
        request,
        firestoreData,
    })
}
