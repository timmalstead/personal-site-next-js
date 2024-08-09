const { LoremIpsum } = require("lorem-ipsum")

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 15,
        min: 3,
    },
    wordsPerSentence: {
        max: 7,
        min: 4,
    },
})

const generateSeparateParagraphs = (numberOfParagraphs) => {
    let generatedText = ""
    for (let i = 1; i <= numberOfParagraphs; i++)
        generatedText += `${lorem.generateParagraphs(1)}\n\n`
    return generatedText
}

const data = {
    api: {
        test: {
            content: {
                data: {
                    title: "very important data",
                    important: true,
                },
            },
        },
    },
    home: {
        content: {
            text: `
# ${lorem.generateSentences(1)}
## ${lorem.generateSentences(1)}
${generateSeparateParagraphs(3)}
## ${lorem.generateSentences(1)}
${generateSeparateParagraphs(4)}
## ${lorem.generateSentences(1)}
${generateSeparateParagraphs(7)}
`,
        },
    },
}

console.info("using firestore mock")

class Firestore {
    collection(collectionName) {
        return {
            doc: (docName) => {
                return {
                    get: async () => {
                        return {
                            data: () => data[collectionName][docName],
                        }
                    },
                }
            },
        }
    }

    doc(docName) {
        const splitKeyArray = docName.split("/")
        let tempData = data

        for (const key of splitKeyArray) {
            tempData = tempData[key]
            if (tempData === undefined) break
        }

        return {
            get: async () => {
                return {
                    data: () => tempData,
                }
            },
        }
    }
}

module.exports = { Firestore }
