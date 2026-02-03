import { test, expect, type Page } from "@playwright/test"
import { sharedFooterLogoProps } from "&components/server"

let page: Page

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto("/header-and-footer")
})

test.afterAll(async () => {
    await page.close()
})

const linkElements = [
    { element: "footer", expectedCount: 6 },
    { element: "header", expectedCount: 3 },
]

test.describe("footer and header", () => {
    test("footer and header elements should have the correct number of links", async () => {
        const linkTestsToAssert = linkElements.map(
            async ({ element, expectedCount }) => {
                const elementToAssert = page.locator(element)
                expect(
                    await elementToAssert.locator("nav > ul > li").count()
                ).toEqual(expectedCount)
            }
        )

        await Promise.all(linkTestsToAssert)
    })

    test("logo elements should have the correct width, height, and fill", async () => {
        const logoElements = await page.locator("svg.logo").all()

        const logoTestsToAssert = logoElements.map(async (logoElement) => {
            const width = await logoElement.getAttribute("width")
            const height = await logoElement.getAttribute("height")
            const fill = await logoElement.locator("path").getAttribute("fill")

            expect(width).toEqual(sharedFooterLogoProps.width)
            expect(height).toEqual(sharedFooterLogoProps.height)
            expect(fill).toEqual(sharedFooterLogoProps.fill)
        })

        await Promise.all(logoTestsToAssert)
    })
})
