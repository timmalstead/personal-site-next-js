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

const getPageInfo = () => `
## ${lorem.generateSentences(1)}
${generateSeparateParagraphs(3)}
## ${lorem.generateSentences(1)}
${generateSeparateParagraphs(4)}
## ${lorem.generateSentences(1)}
${generateSeparateParagraphs(7)}
## ${lorem.generateSentences(1)}
${generateSeparateParagraphs(1)}
`

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
            components: [
                {
                    name: "Markdown",
                    text: `
# Home page mock info
${getPageInfo()}
`,
                },
            ],
        },
    },
    about: {
        content: {
            components: [
                {
                    name: "Markdown",
                    text: `
# About page mock info
${getPageInfo()}
`,
                },
            ],
        },
    },
    "image-examples": {
        content: {
            components: [
                {
                    name: "Markdown",
                    text: `
![a large svg, rendered via markdown and loaded without width and height](/large.svg "a large svg, rendered via markdown and loaded without width and height")
![a large svg, rendered via markdown and optimized with width and height](/large:w1917-h1014.svg "a large svg, rendered via markdown and optimized with width and height")
`,
                },
                {
                    name: "Image",
                    src: "/large.svg",
                    alt: "a large svg, rendered via the Image component and loaded without width and height",
                    title: "a large svg, rendered via the Image component and loaded without width and height",
                },
                {
                    name: "Image",
                    src: "/large:w1917-h1014.svg",
                    alt: "a large svg, rendered via the Image component and optimized with width and height",
                    title: "a large svg, rendered via the Image component and optimized with width and height",
                },
                {
                    name: "Image",
                    src: "/large:h1014-w1917.svg",
                    alt: "a large svg, rendered via the Image component and with the height and width params swapped to see if it breaks",
                    title: "a large svg, rendered via the Image component and with the height and width params swapped to see if it breakst",
                },
                {
                    name: "Image",
                    src: "/large:a1917-b1014.svg",
                    alt: "a large svg, rendered via the Image component with a and b params in place of the w and h string params to see if it breaks",
                    title: "a large svg, rendered via the Image component with a and b params in place of the w and h string params to see if it breaks",
                },
                {
                    name: "Image",
                    src: "/large:w1917-h1014.svg",
                    alt: "a large svg, rendered via the Image component and optimized with explicit width and height props that should override the width and height in the src",
                    title: "a large svg, rendered via the Image component and optimized with explicit width and height props that should override the width and height in the src",
                    width: 500,
                    height: 264,
                },
                {
                    name: "Image",
                    src: "/large:w1917-h1014.svg",
                    alt: "a large svg, rendered via the Image component and optimized with explicit width and height props that must override the width and height in the src as well an inline props so that it will not center automatically",
                    title: "a large svg, rendered via the Image component and optimized with explicit width and height props that must override the width and height in the src as well an inline props so that it will not center automatically",
                    width: 500,
                    height: 264,
                    inline: true,
                },
            ],
        },
    },
}

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
            if (tempData === undefined)
                throw new Error("Cannot read properties of undefined")
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
