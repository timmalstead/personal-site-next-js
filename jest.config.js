const { aliasedDirectories } = require("./aliasedDirectories")

/** @type {import('jest').Config} */
const jestConfig = {
    // change if any other jest tests are added OUTSIDE of the &data folder
    roots: ["<rootDir>/&data"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: aliasedDirectories.reduce(
        (acc, name) => ({
            ...acc,
            [`${name}/(.*)`]: `<rootDir>/${name}/$1`
        }),
        {}
    ),
}

module.exports = jestConfig
