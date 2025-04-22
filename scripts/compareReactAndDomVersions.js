const { dependencies } = require("../package.json")

const reactVersion = dependencies.react
const reactDomVersion = dependencies["react-dom"]

const versionsAreEqual = reactVersion === reactDomVersion
if (versionsAreEqual) {
    console.info(`react and react-dom versions are equal: ${reactVersion}`)
    process.exit(0)
} else {
    console.error(
        `react and react-dom versions are not equal. react: ${reactVersion}, react-dom: ${reactDomVersion}`
    )
    process.exit(1)
}
