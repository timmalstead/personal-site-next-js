import { firestoreDatabase } from "../../_utils/firestore"

export const dynamic = "force-dynamic"
export const GET = async (request: Request) => {
    const docRef = firestoreDatabase.doc("users/alovelace")
    const firestoreData = await docRef.get().then((doc) => doc.data())

    return Response.json({
        hello: "from the api",
        request: JSON.stringify(request),
        firestoreData,
    })
}
