import { test, expect } from "@playwright/test"

const credentials = {
    headers: {
        accept: "application/json",
        Authorization: "SUPER_SECRET_SECRET_SQUIRREL",
    },
}

const [readRoute, deleteRoute] = [
    "/api/publish/v1/read",
    "/api/publish/v1/destroy",
]

test.describe("middleware", () => {
    test("middleware should reject unauthorized use", async ({ request }) => {
        const response = await request.post("/api/test", {
            headers: { accept: "application/json", Authorization: "FAKE_KEY" },
        })
        expect(response.ok()).toBe(true)

        const json = await response.json()
        expect(json).toEqual({ error: "Unauthorized", status: 401 })
    })

    test("middleware should allow authorized use and should forward request", async ({
        request,
    }) => {
        // important to use GET method here
        const response = await request.get("/api/test", credentials)

        expect(response.ok()).toBe(true)

        const json = await response.json()
        expect(json).toEqual({
            pageName: "api/test",
            request: {},
            firestoreData: {
                title: "very important data",
                important: true,
            },
        })
    })
})

test.describe("read route", () => {
    test("should return error object when 'path' query param is not provided", async ({
        request,
    }) => {
        const response = await request.get(readRoute, credentials)

        expect(response.ok()).toBe(true)

        const json = await response.json()
        expect(json).toEqual({
            error: "No 'path' param provided",
        })
    })

    test("should return error object when 'path' query param points to data that does not exist", async ({
        request,
    }) => {
        const response = await request.get(
            `${readRoute}/?path=fake-data`,
            credentials
        )

        expect(response.ok()).toBe(true)

        const json = await response.json()
        expect(json).toEqual({
            error: "No data found at fake-data",
        })
    })

    test("should return correct data when 'path' query param points to data that does exist", async ({
        request,
    }) => {
        const response = await request.get(
            `${readRoute}/?path=read-success`,
            credentials
        )

        expect(response.ok()).toBe(true)

        const json = await response.json()
        expect(json).toEqual({
            content: {
                components: [
                    {
                        name: "Markdown",
                        text: "# SUCCESS!",
                    },
                ],
            },
        })
    })
})

test.describe("delete route", () => {
    test("should return error object when 'docPath' data property is not present in delete data", async ({
        request,
    }) => {
        const response = await request.delete(deleteRoute, {
            ...credentials,
            data: { docPath: "" },
        })

        expect(response.ok()).toBe(true)

        const json = await response.json()
        expect(json).toEqual({
            error: "No 'docPath' data provided",
        })
    })

    test("should return error object when 'docPath' data property points to data that does not exist", async ({
        request,
    }) => {
        const response = await request.delete(deleteRoute, {
            ...credentials,
            data: { docPath: "fake-data" },
        })

        expect(response.ok()).toBe(true)

        const json = await response.json()
        expect(json).toEqual({
            error: "No data found at fake-data",
        })
    })

    test("should successfully delete data when 'docPath' data property points to data that does exist", async ({
        request,
        isMobile,
        channel,
    }) => {
        // Running only on the three default browsers. As far as I can tell, it will reuse the same server for browers with the same browserName property
        // I need a new server on each and every browser or it will fail
        test.skip(channel === "chrome" || channel === "msedge" || isMobile)

        const docPath = "delete-success"
        const deleteReadRoute = `${readRoute}/?path=${docPath}`

        const confirmData = await request.get(deleteReadRoute, credentials)

        expect(confirmData.ok()).toBe(true)
        const confirmDataJson = await confirmData.json()

        expect(confirmDataJson).toEqual({
            content: {
                components: [
                    {
                        name: "Markdown",
                        text: "# DELETE THIS DATA!",
                    },
                ],
            },
        })

        const deleteRequest = await request.delete(deleteRoute, {
            ...credentials,
            data: { docPath },
        })

        expect(deleteRequest.ok()).toBe(true)

        const deleteRequestJson = await deleteRequest.json()
        expect(deleteRequestJson).toEqual({
            success: "Data deleted at delete-success",
        })

        const confirmDelete = await request.get(deleteReadRoute, credentials)

        expect(confirmDelete.ok()).toBe(true)

        const confirmDeleteJson = await confirmDelete.json()
        expect(confirmDeleteJson).toEqual({
            error: "No data found at delete-success",
        })
    })
})
