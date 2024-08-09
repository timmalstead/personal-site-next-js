import { test, expect } from "@playwright/test"

test("Dynamic page should load with data from firestore", async ({ page }) => {
    await page.goto("/about")
    const titleNode = page.getByText("About page mock info")
    await expect(titleNode).toBeAttached()

    await page.close()
})
