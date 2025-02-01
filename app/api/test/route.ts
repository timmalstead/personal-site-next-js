import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"
import { getContent } from "@data"

export const dynamic = "force-dynamic"
export const GET = async (request: NextRequest) => {
    const pageName = (await headers()).get("X-Pagename") as string
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
