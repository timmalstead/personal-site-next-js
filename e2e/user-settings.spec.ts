import { test, expect, type Page } from "@playwright/test"

let page: Page

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto("/")
})

test.afterAll(async () => {
    await page.close()
})

const getToggle = () => page.getByText("↔")

test.describe("User settings toggle", () => {
    test("Toggle should be present", async () => {
        await expect(getToggle()).toBeVisible()
    })

    test("Toggle button parent should have closed class when clicked", async () => {
        await getToggle().click()
        await expect(page.locator("css=.user-settings")).toHaveClass(
            "user-settings closed"
        )
    })

    test("Toggle should not be visible when settings is open", async () => {
        const settings = page.getByText("settings")
        await settings.click()

        await expect(getToggle()).not.toBeVisible()
    })
})