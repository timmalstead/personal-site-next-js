import { test, expect, Page } from "@playwright/test"

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
    await page.close()
})

test.describe("Color themes", () => {
    const [darkColor, lightColor] = ["rgb(27, 25, 25)", "rgb(230, 230, 230)"] // #1b1919 and #e6e6e6 respectively
    const bgShouldBe = async (page: Page, color: string) =>
        expect(page.getByTestId("background")).toHaveCSS(
            "background-color",
            color
        )

    // how can we test the media query inside the color switcher?

    test("Color theme should switch when color switcher is clicked", async ({
        page,
    }) => {
        await page.goto("/")

        await bgShouldBe(page, lightColor)

        const settings = page.getByText("settings")
        await settings.click()

        const colorSwitcher = page.getByText(/theme/)

        await colorSwitcher.click()
        await bgShouldBe(page, darkColor)

        await colorSwitcher.click()
        await bgShouldBe(page, lightColor)
        await page.close()
    })

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

            if (cookieName && cookieValue)
                await context.addCookies([
                    {
                        name: cookieName,
                        value: cookieValue,
                        url: "http://127.0.0.1:3000/",
                    },
                ])

            const page = await context.newPage()

            if (headerName && headerValue)
                await page.setExtraHTTPHeaders({
                    [headerName]: headerValue,
                })

            await page.goto("/")
            await bgShouldBe(page, expectedColor)
            await page.close()
            await context.close()
        })
    }
})
