import { test, expect } from "@playwright/test"

test("Header should be sticky when scrolling up, but not down", async ({
    page,
}) => {
    await page.goto("/")
    const headerLink = page.getByText("timothy_malstead")
    await expect(headerLink).toBeInViewport()

    await page.mouse.wheel(0, 2000)
    await expect(headerLink).not.toBeInViewport()

    await page.mouse.wheel(0, -1000)
    await expect(headerLink).toBeInViewport()
    page.close()
})

const [darkColor, lightColor] = ["rgb(27, 25, 25)", "rgb(230, 230, 230)"] // #1b1919 and #e6e6e6 respectively
const loadingColorTestCases = [
    {
        testName: "Has dark background with dark colorMode cookie",
        cookieName: "colorMode",
        cookieValue: "dark",
        headerName: "",
        headerValue: "",
        expectedColor: darkColor,
    },
    {
        testName: "Has light background with light colorMode cookie",
        cookieName: "colorMode",
        cookieValue: "light",
        headerName: "",
        headerValue: "",
        expectedColor: lightColor,
    },
    {
        testName: "Has light background with light header",
        cookieName: "",
        cookieValue: "",
        headerName: "Sec-CH-Prefers-Color-Scheme",
        headerValue: "light",
        expectedColor: lightColor,
    },
    /* TODO: Fix this test {
        testName: "Has dark background with dark header",
        cookieName: "",
        cookieValue: "",
        headerName: "Sec-CH-Prefers-Color-Scheme",
        headerValue: "dark",
        expectedColor: darkColor,
    }, */
    {
        testName: "Has light background by default",
        cookieName: "",
        cookieValue: "",
        headerName: "",
        headerValue: "",
        expectedColor: lightColor,
    },
]
test.describe("loading color theme tests", () => {
    for (const {
        testName,
        cookieName,
        cookieValue,
        headerName,
        headerValue,
        expectedColor,
    } of loadingColorTestCases) {
        test(testName, async ({ browser }) => {
            const context = await browser.newContext()

            cookieName &&
                cookieValue &&
                (await context.addCookies([
                    {
                        name: cookieName,
                        value: cookieValue,
                        url: "http://127.0.0.1:3000/",
                    },
                ]))
            const page = await context.newPage()

            headerName &&
                headerValue &&
                (await page.setExtraHTTPHeaders({ [headerName]: headerValue }))

            await page.goto("/")
            const background = page.getByTestId("background")
            await expect(background).toHaveCSS(
                "background-color",
                expectedColor
            )
        })
    }
})
