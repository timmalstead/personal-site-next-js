const { aliasedDirectories } = require("./aliasedDirectories")

/** @type {import('jest').Config} */
const jestConfig = {
    roots: ["<rootDir>/app"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
    moduleNameMapper: aliasedDirectories.reduce(
        (acc, name) => ({
            ...acc,
            [`${name}/(.*)`]: name === "&utils" ? `<rootDir>/${name}/$1` : `<rootDir>/app/${name}/$1`,
        }),
        {}
    ),
}

module.exports = jestConfig
