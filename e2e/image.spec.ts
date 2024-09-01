import { test, expect, type Page } from "@playwright/test"

let page: Page

test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    await page.goto("/image-examples")
})

test.afterAll(async () => {
    await page.close()
})

const [width, height] = [1917, 1014]
const imageExamples = [
    {
        testTitle:
            "it should render images via markdown without width and height",
        altText:
            "a large svg, rendered via markdown and loaded without width and height",
    },
    {
        testTitle:
            "it should render images via markdown with explicit width and height",
        altText:
            "a large svg, rendered via markdown and optimized with width and height",
        width,
        height,
    },
    {
        testTitle:
            "it should render images via the Image component without width and height",
        altText:
            "a large svg, rendered via the Image component and loaded without width and height",
    },
    {
        testTitle:
            "it should render images via the Image component with explicit width and height",
        altText:
            "a large svg, rendered via the Image component and optimized with width and height",
        width,
        height,
    },
    {
        testTitle:
            "it should render images via the Image component with explicit width and height when the width and height order are swapped",
        altText:
            "a large svg, rendered via the Image component and with the height and width params swapped to see if it breaks",
        width,
        height,
    },
    {
        testTitle:
            "it should render images via the Image component without width and height when the width and height indicators are replaced with other characters",
        altText:
            "a large svg, rendered via the Image component with a and b params in place of the w and h string params to see if it breaks",
    },
    {
        testTitle:
            "it should render images via the Image component privledging explicit width and height over width and height extracted from src string",
        altText:
            "a large svg, rendered via the Image component and optimized with explicit width and height props that should override the width and height in the src",
        width: 500,
        height: 264,
    },
    {
        testTitle:
            "it should render images via the Image component privledging explicit width and height over width and height extracted from src string as well as render inline when inline prop is true",
        altText:
            "a large svg, rendered via the Image component and optimized with explicit width and height props that must override the width and height in the src as well an inline props so that it will not center automatically",
        width: 500,
        height: 264,
        inline: true,
    },
]

imageExamples.forEach(({ testTitle, altText, width, height, inline }) => {
    test(testTitle, async () => {
        const imageNode = page.getByAltText(altText)
        await expect(imageNode).toBeAttached()
        if (width && height) {
            await expect(imageNode).toHaveAttribute("width", `${width}`)
            await expect(imageNode).toHaveAttribute("height", `${height}`)
        }
        if (inline) {
            await expect(imageNode).toHaveClass(/inline/)
        }
    })
})
