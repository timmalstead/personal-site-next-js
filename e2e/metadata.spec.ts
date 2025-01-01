import { test, expect, type Page } from "@playwright/test"

let page: Page

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto("/blog")
})

test.afterAll(async () => {
    await page.close()
})

test.describe("Metadata", () => {
    test("title should be present in the head of the page", async () => {
        await expect(page).toHaveTitle("Blog | Timothy Malstead")
    })
    test("description should be present in the head of the page", async () => {
        const metaDescription = page.locator('meta[name="description"]')
        await expect(metaDescription).toHaveAttribute(
            "content",
            "The blog of Timothy Malstead, a software engineer and artist from the United States."
        )
    })
})
