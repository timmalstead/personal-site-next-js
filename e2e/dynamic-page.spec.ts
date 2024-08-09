import { test, expect } from "@playwright/test"

test("Dynamic page should load with data from firestore when data is present", async ({
    page,
}) => {
    await page.goto("/about")
    const titleNode = page.getByText("About page mock info")
    await expect(titleNode).toBeAttached()

    await page.close()
})

test("Dynamic page should redirect to 404 page when data is NOT present", async ({
    page,
}) => {
    await page.goto("/fake-page")
    const errorNode = page.getByText("404 - Page Not Found")
    await expect(errorNode).toBeAttached()

    await page.close()
})
