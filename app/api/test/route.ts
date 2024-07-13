import { firestoreDatabase } from "../../_utils/firestore"

export const GET = async (request: Request) => {
    // const docRef = firestoreDatabase.collection("users").doc("alovelace")
    const docRef = firestoreDatabase.doc("users/alovelace")
    const firestoreData = await docRef.get().then((doc) => doc.data())

    return Response.json({
        hello: "from the api",
        request: JSON.stringify(request),
        firestoreData,
    })
}
