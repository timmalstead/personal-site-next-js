import { firestoreDatabase } from "../../_utils/firestore"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const GET = async (request: NextRequest) => {
    const docRef = firestoreDatabase.doc("test/data")
    const firestoreData = await docRef.get().then((doc) => doc.data())

    return NextResponse.json({
        request,
        firestoreData,
    })
}
