const { execSync } = require("node:child_process")
const {
    engines: { node: expectedVersion },
} = require("../package.json")

try {
    const currentVersion = execSync("node -v", {
        encoding: "utf8",
    }).trim()

    const nonNumbersRegex = /[^0-9]+/g
    const [expectedVersionNum, currentMajorVersionNum] = [
        expectedVersion,
        currentVersion,
    ].map((version) => +version.replace(nonNumbersRegex, ""))

    const isCurrentVersionHighEnough =
        currentMajorVersionNum >= expectedVersionNum

    if (isCurrentVersionHighEnough) {
        console.log(
            `Node.js version ${currentVersion} is compatible with the project.`
        )
        process.exit(0)
    } else {
        console.error(
            `Node.js version ${currentVersion} is not compatible with the project.`
        )
        console.error(
            `Please install Node.js version ${expectedVersion} or higher.`
        )
        process.exit(1)
    }
} catch (error) {
    console.error("Error checking Node.js version:", error)
    process.exit(1)
}
