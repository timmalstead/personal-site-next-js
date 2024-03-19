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
})
