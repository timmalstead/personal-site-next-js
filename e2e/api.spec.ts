import { test, expect } from "@playwright/test"

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
        const response = await request.get("/api/test", {
            headers: {
                accept: "application/json",
                Authorization: "SUPER_SECRET_SECRET_SQUIRREL",
            },
        })

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
