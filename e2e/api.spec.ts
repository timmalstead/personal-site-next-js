import { test, expect, APIResponse } from "@playwright/test"

const credentials = {
    headers: {
        accept: "application/json",
        Authorization: "SUPER_SECRET_SECRET_SQUIRREL",
    },
}

const [createRoute, readRoute, deleteRoute] = ["create", "read", "destroy"].map(
    (routeTitle) => `/api/publish/v1/${routeTitle}`
)

const shouldSkipBrowser = (channel: string | undefined, isMobile: boolean) =>
    channel === "chrome" || channel === "msedge" || isMobile

const assertRouteReturn = async (
    response: APIResponse,
    assertion: { [key: string]: any }
): Promise<void> => {
    expect(response.ok()).toBe(true)

    const responseJson = await response.json()
    expect(responseJson).toEqual(assertion)
}

test.describe("middleware", () => {
    test("middleware should reject unauthorized use", async ({ request }) => {
        const unAuthResponse = await request.post("/api/test", {
            headers: { accept: "application/json", Authorization: "FAKE_KEY" },
        })

        assertRouteReturn(unAuthResponse, {
            error: "Unauthorized",
            status: 401,
        })
    })

    test("middleware should allow authorized use and should forward request", async ({
        request,
    }) => {
        // important to use GET method here
        const testResponse = await request.get("/api/test", credentials)

        assertRouteReturn(testResponse, {
            pageName: "api/test",
            request: {},
            firestoreData: {
                title: "very important data",
                important: true,
            },
        })
    })
})

test.describe("create route", () => {
    const argError = "Either no 'docPath' or 'data' data provided"

    test("should return error object when 'docPath' data property is not present in post data", async ({
        request,
    }) => {
        const noDocPathResponse = await request.post(createRoute, {
            ...credentials,
            data: { docPath: "", data: {} },
        })

        assertRouteReturn(noDocPathResponse, {
            error: argError,
        })
    })

    test("should return error object when 'data' data property is not present in post data", async ({
        request,
    }) => {
        const noDataResponse = await request.post(createRoute, {
            ...credentials,
            data: { docPath: "/fake-path", data: null },
        })

        assertRouteReturn(noDataResponse, {
            error: argError,
        })
    })

    test("should return error object when 'docPath' data property points to data that already exists and NO confirmReplace boolean property is sent", async ({
        request,
    }) => {
        const alreadyCreatedResponse = await request.post(createRoute, {
            ...credentials,
            data: { docPath: "/create-failure", data: {} },
        })

        assertRouteReturn(alreadyCreatedResponse, {
            error: "Data already exists at /create-failure, send with boolean 'confirmReplace' argument to replace",
        })
    })

    test("should successfully overwrite data when 'docPath' data property points to data that already exists and confirmReplace boolean property set to true is sent", async ({
        request,
        isMobile,
        channel,
        browserName,
    }) => {
        test.skip(
            browserName !== "chromium" && shouldSkipBrowser(channel, isMobile)
        )

        const docPath = "/overwrite-success"

        const overwriteRequest = await request.post(createRoute, {
            ...credentials,
            data: {
                docPath,
                confirmReplace: true,
                data: {
                    components: [
                        {
                            name: "Markdown",
                            text: "# THIS IS THE OVERWRITTEN DATA!",
                        },
                    ],
                },
            },
        })

        assertRouteReturn(overwriteRequest, {
            success: `Data created at ${docPath}`,
        })
    })

    test("should successfully create data when 'docPath' data property points to data that does not exist", async ({
        request,
    }) => {
        const docPath = "/create-success"

        const createRequest = await request.post(createRoute, {
            ...credentials,
            data: {
                docPath,
                data: {
                    components: [
                        {
                            name: "Markdown",
                            text: "# CREATING DATA!",
                        },
                    ],
                },
            },
        })

        assertRouteReturn(createRequest, {
            success: `Data created at ${docPath}`,
        })
    })
})

test.describe("read route", () => {
    test("should return error object when 'path' query param is not provided", async ({
        request,
    }) => {
        const noPathResponse = await request.get(readRoute, credentials)

        assertRouteReturn(noPathResponse, {
            error: "No 'path' param provided",
        })
    })

    test("should return error object when 'path' query param points to data that does not exist", async ({
        request,
    }) => {
        const dataDoesNotExistResponse = await request.get(
            `${readRoute}/?path=fake-data`,
            credentials
        )

        assertRouteReturn(dataDoesNotExistResponse, {
            error: "No data found at fake-data",
        })
    })

    test("should return correct data when 'path' query param points to data that does exist", async ({
        request,
    }) => {
        const dataDoesExistResponse = await request.get(
            `${readRoute}/?path=read-success`,
            credentials
        )

        assertRouteReturn(dataDoesExistResponse, {
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
        const noDocPathResponse = await request.delete(deleteRoute, {
            ...credentials,
            data: { docPath: "" },
        })

        assertRouteReturn(noDocPathResponse, {
            error: "No 'docPath' data provided",
        })
    })

    test("should return error object when 'docPath' data property points to data that does not exist", async ({
        request,
    }) => {
        const dataDoesExistResponse = await request.delete(deleteRoute, {
            ...credentials,
            data: { docPath: "fake-data" },
        })

        assertRouteReturn(dataDoesExistResponse, {
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
        test.skip(shouldSkipBrowser(channel, isMobile))

        const docPath = "delete-success"
        const deleteReadRoute = `${readRoute}/?path=${docPath}`

        const confirmData = await request.get(deleteReadRoute, credentials)

        assertRouteReturn(confirmData, {
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

        assertRouteReturn(deleteRequest, {
            success: "Data deleted at delete-success",
        })

        const confirmDelete = await request.get(deleteReadRoute, credentials)

        assertRouteReturn(confirmDelete, {
            error: "No data found at delete-success",
        })
    })
})
