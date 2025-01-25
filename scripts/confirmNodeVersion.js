const { execSync } = require("node:child_process")
const {
    engines: { node: expectedVersion },
} = require("../package.json")

try {
    const currentVersion = execSync("node -v", {
        encoding: "utf8",
    }).trim()

    const nonNumbersAndPeriodRegex = /[^1-9.]+/g
    const [expectedVersionNum, currentMajorVersionNum] = [
        expectedVersion,
        currentVersion,
    ].map((version) => {
        const versionWithPeriods = version.replace(nonNumbersAndPeriodRegex, "")
        const [majorVersion] = versionWithPeriods.split(".")
        return +majorVersion
    })

    const isCurrentVersionHighEnough =
        currentMajorVersionNum >= expectedVersionNum

    if (isCurrentVersionHighEnough) {
        console.info(
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
