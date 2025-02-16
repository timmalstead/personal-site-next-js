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
const clickSettings = async (): Promise<void> => {
    const settings = page.getByText("settings")
    await settings.click()
}

test.describe("User settings toggle", () => {
    test("Toggle should be present and closed", async () => {
        await expect(getToggle()).toBeVisible()
        await expect(page.locator("css=.user-settings")).toHaveClass(
            "user-settings closed"
        )
    })

    test("Toggle button parent should have open class when clicked", async () => {
        await getToggle().click()
        await expect(page.locator("css=.user-settings")).toHaveClass(
            "user-settings open"
        )
    })

    test("Toggle should not be visible when settings is open", async () => {
        const settings = page.getByText("settings")
        await settings.click()

        await expect(getToggle()).not.toBeVisible()
    })
})

test.describe("Dev tools", () => {
    test.beforeAll(async () => {
        await getToggle().click()
        await clickSettings()
    })

    test("dev tools should have children", async () => {
        const devTools = page.locator("div#dev-tools")
        await expect(devTools).toBeVisible()

        // check for children nodes
        const childrenNodes = devTools.locator("li")

        expect(await childrenNodes.count()).toBeGreaterThanOrEqual(2)
    })

    test("should load current git sha in lower envs", async () => {
        const versionLabel = page.getByText("version")
        await expect(versionLabel).toBeAttached()

        const versionText = page.locator("span#current-version")
        await expect(versionText).toBeAttached()

        // check to make sure the text is short git sha
        expect(await versionText.innerText()).toHaveLength(7)
    })
})
