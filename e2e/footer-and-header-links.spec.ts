import { test, expect, type Page } from "@playwright/test"

let page: Page

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto("/header-and-footer")
})

test.afterAll(async () => {
    await page.close()
})

const elementsToAssert = [
    { element: "footer", expectedCount: 5 },
    { element: "header", expectedCount: 2 },
]

test.describe("footer and header links", () => {
    elementsToAssert.forEach(({ element, expectedCount }) => {
        test(`${element} should contain ${expectedCount} links`, async () => {
            const elementToAssert = page.locator(element)
            expect(
                await elementToAssert.locator("nav > ul > li").count()
            ).toEqual(expectedCount)
        })
    })
})
