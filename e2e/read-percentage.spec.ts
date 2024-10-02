import { test, expect, type Page } from "@playwright/test"

let page: Page

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto("/read-percentage-example")
})

test.afterAll(async () => {
    await page.close()
})

const getReadPercentage = () => page.getByTestId("read-percentage")

test.describe("when the read percenage component DOES NOT intersect with the viewport", () => {
    test("it should not be present on the DOM when the viewport is ABOVE the intersection", async () => {
        await expect(getReadPercentage()).not.toBeAttached()
    })

    test("it should not be present on the DOM when the viewport is BELOW the intersection", async () => {
        await page.locator("#end-of-page").scrollIntoViewIfNeeded()
        await expect(getReadPercentage()).not.toBeAttached()
    })
})

test.describe("when the read percenage component DOES intersect with the viewport", () => {
    test.beforeAll(async () => {
        const startingPoint = page.getByTitle("read-percentage-subheading")
        await startingPoint.click()
    })

    test("it should be present on the DOM", async () => {
        await expect(getReadPercentage()).toBeAttached()
    })

    test("it should display a percentage that aligns to the amount of an article read", async ({
        browserName,
    }) => {
        if (browserName === "webkit") test.fixme(true)

        // different browsers have different amounts they will scroll
        const validScrollReadPercentageAmounts = /21.*|10.*|11.*/
        await page.mouse.wheel(0, 2000)
        await expect(getReadPercentage()).toHaveAttribute(
            "value",
            validScrollReadPercentageAmounts
        )
    })
})
