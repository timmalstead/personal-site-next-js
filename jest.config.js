/** @type {import('jest').Config} */
const jestConfig = {
    roots: ["<rootDir>/app"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest",
    },
}

module.exports = jestConfig
