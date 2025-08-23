import { Attribution, Heading } from "@components/server"
import { fetchRecipeWidget } from "./fetchRecipeWidget"
import "./kagi-tryout-styles.css"

const KagiTryout = async () => {
    const {
        HtmlCode,
        CssCode,
        RecipeStyles,
        RecipeShortChecklist,
        RecipeFullChecklist,
        RecipeParagraph,
    } = await fetchRecipeWidget()

    return (
        <main className="kagi-tryout-styles">
            <RecipeStyles />
            <Heading level="h1">Kagi FE Demo Project</Heading>
            <Attribution readingTime={10} />
            <HtmlCode />
            <CssCode />
            <RecipeShortChecklist />
            <RecipeFullChecklist />
            <RecipeParagraph />
        </main>
    )
}

export default KagiTryout
