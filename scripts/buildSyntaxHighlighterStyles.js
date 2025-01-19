const { join } = require("node:path")
const { writeFileSync } = require("node:fs")
const { execSync } = require("node:child_process")
const {
    oneDark,
    oneLight,
} = require("react-syntax-highlighter/dist/cjs/styles/prism")

// the idea for this script didn't quite work out due to, I assume, the way that syntax highlighter handles styling.
// It would have been cool if it had though
const themes = [{ "&.dark": oneDark }, { "&.light": oneLight }]

// won't lie, copilot did a decent job of a first draft on this
// I like mine better though
const camelToKebab = (key) => {
    // one special case that below doesn't catch
    if (key === "msHyphens") return "-ms-hyphens"
    const capitalLetterRegex = /[A-Z]/g
    return key.replace(capitalLetterRegex, (match) => `-${match.toLowerCase()}`)
}

const convertStyles = (styleObject) =>
    Object.entries(styleObject).reduce((sheet, [key, value]) => {
        sheet += `${key} {.syntax-highlighter {
        ${Object.entries(value).reduce((ruleSet, [key, value]) => {
            ruleSet += `${key} {${Object.entries(value).reduce(
                (rule, [key, value]) => {
                    rule += `${camelToKebab(key)}: ${value};`
                    return rule
                },
                ""
            )}}`
            return ruleSet
        }, "")}}}`
        return sheet
    }, "")

const sheet = `:root {
    ${themes.reduce((sheet, theme) => {
        sheet += convertStyles(theme)
        return sheet
    }, "")}
}`

const sheetPath = join(
    __dirname,
    "..",
    "app",
    "@components",
    "code",
    "syntax-highlighter.css"
)

writeFileSync(sheetPath, sheet)
execSync(`npx prettier --write ${sheetPath}`)
