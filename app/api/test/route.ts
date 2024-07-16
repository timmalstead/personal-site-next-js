import { firestoreDatabase } from "../../_utils/firestore"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"
export const GET = async (request: NextRequest) => {
    const docRef = firestoreDatabase.doc("users/alovelace")
    const firestoreData = await docRef.get().then((doc) => doc.data())

    return NextResponse.json({
        hello: "from the api",
        request: JSON.stringify(request),
        firestoreData,
    })
}
