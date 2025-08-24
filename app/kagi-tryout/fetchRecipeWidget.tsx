// don't change the structure of the html or css too much so this will keep working!
import { Code } from "@components/server"
import type { ReactNode } from "react"

type HtmlComponents =
    | "HtmlCode"
    | "CssCode"
    | "RecipeStyles"
    | "RecipeShortChecklist"
    | "RecipeFullChecklist"
    | "RecipeParagraph"

const RAW_CODE_ENDPOINT =
    "https://raw.githubusercontent.com/timmalstead/kagi-tryout/refs/heads/main"

const fileEndpoints = ["/index.html", "/styles.css"]

const [openingHtmlTag, closingHtmlTag] = [
    '<div class="recipe-widget">',
    "</div>",
]

export const fetchRecipeWidget = async (): Promise<{
    [title in HtmlComponents]: () => ReactNode
}> => {
    const [rawHtml, rawCss] = await Promise.all(
        fileEndpoints.map(async (fileEndpoint) =>
            fetch(`${RAW_CODE_ENDPOINT}${fileEndpoint}`).then((response) =>
                response.text()
            )
        )
    )

    const widgets = rawHtml.slice(
        rawHtml.indexOf(openingHtmlTag),
        rawHtml.lastIndexOf(closingHtmlTag) + closingHtmlTag.length
    )

    const splitWidgetsAsStrings = widgets.split("\n")
    const componentStrings: string[] = []

    while (splitWidgetsAsStrings.length) {
        const endOfComponent = splitWidgetsAsStrings.find((line) =>
            line.endsWith(closingHtmlTag)
        ) as string
        const indexOfClosingDiv =
            splitWidgetsAsStrings.indexOf(endOfComponent) + 1

        const oneComponent = splitWidgetsAsStrings.splice(0, indexOfClosingDiv)

        componentStrings.push(oneComponent.join("\n"))
    }

    const [recipeShortChecklistHtml, recipeFullChecklistHtml, recipeParagraph] =
        componentStrings

    const slicedStyles = `
<style>
${rawCss}
</style>`

    return {
        HtmlCode: () => <Code className={"html"}>{rawHtml}</Code>,
        CssCode: () => <Code className={"css"}>{rawCss}</Code>,
        RecipeStyles: () => (
            <div dangerouslySetInnerHTML={{ __html: slicedStyles }} />
        ),
        RecipeShortChecklist: () => (
            <div
                dangerouslySetInnerHTML={{
                    __html: recipeShortChecklistHtml,
                }}
            />
        ),
        RecipeFullChecklist: () => (
            <div
                dangerouslySetInnerHTML={{
                    __html: recipeFullChecklistHtml,
                }}
            />
        ),
        RecipeParagraph: () => (
            <div dangerouslySetInnerHTML={{ __html: recipeParagraph }} />
        ),
    }
}
