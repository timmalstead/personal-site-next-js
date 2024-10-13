import { defineConfig, devices } from "@playwright/test"

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const isCiEnv = process.env.CI === "true"
export const testUrl = "http:127.0.0.1:8080"

let projects = [
    {
        name: "chromium",
        use: { ...devices["Desktop Chrome"] },
    },
]

const localRunBrowsers = [
    {
        name: "firefox",
        use: { ...devices["Desktop Firefox"] },
    },
    {
        name: "webkit",
        use: { ...devices["Desktop Safari"] },
    },
    {
        name: "Mobile Chrome",
        use: { ...devices["Pixel 5"] },
    },
    {
        name: "Mobile Firefox",
        use: { ...devices["Pixel 5"] },
    },
    {
        name: "Mobile Safari",
        use: { ...devices["iPhone 12"] },
    },
    {
        name: "Microsoft Edge",
        use: { ...devices["Desktop Edge"], channel: "msedge" },
    },
    {
        name: "Google Chrome",
        use: { ...devices["Desktop Chrome"], channel: "chrome" },
    },
]

if (!isCiEnv) projects = [...projects, ...localRunBrowsers]

export default defineConfig({
    testDir: "./e2e",
    /* Run tests in files in parallel */
    fullyParallel: true,
    /* Fail the build on CI if you accidentally left test.only in the source code. */
    forbidOnly: isCiEnv,
    /* Retry on CI only */
    retries: 5,
    /* Opt out of parallel tests on CI. */
    workers: 10,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    reporter: isCiEnv ? "dot" : "html",
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    use: {
        /* Base URL to use in actions like `await page.goto('/')`. */
        baseURL: testUrl,

        /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
        trace: "on-first-retry",
    },

    /* Configure projects for major browsers */
    projects,

    /* Run your local dev server before starting the tests */
    webServer: {
        command: "npm run clear:next && npm run dev",
        url: testUrl,
        reuseExistingServer: false,
        env: {
            USE_TESTING_FIRESTORE: "true",
            MIDDLEWARE_AUTHORIZATION: "SUPER_SECRET_SECRET_SQUIRREL",
        },
    },
})
