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

const staticDataForReadPercentage = `
Mollit deserunt deserunt minim. Cillum excepteur cillum in sunt. Occaecat ut deserunt fugiat aute. Commodo id adipisicing excepteur excepteur. Consectetur veniam nisi commodo. Occaecat consectetur ad ex nostrud amet. Aliqua ad fugiat quis. Nulla culpa consequat labore exercitation ipsum tempor. Aute laboris sint aute.

Sit elit amet dolor culpa consequat sit. Proident voluptate commodo consequat occaecat non Lorem. Eu quis anim id in laboris. Enim nostrud labore laborum cillum magna. Lorem Lorem sint dolor minim. Culpa aute culpa magna. Duis excepteur laborum dolore.

Esse fugiat sit commodo nostrud aute. Esse tempor nulla in. Do proident dolore ullamco ea. Ullamco ea dolor tempor ipsum. Aliqua deserunt ut anim id. Eiusmod quis eiusmod duis do ea. Tempor do aliqua voluptate. Nulla duis reprehenderit eu ad laborum ea.

## Aute non ipsum deserunt Lorem voluptate cupidatat.

Do officia labore quis reprehenderit tempor. Labore quis tempor reprehenderit. Et officia exercitation id. Sit incididunt minim quis labore aliquip minim. Amet dolore anim nisi amet excepteur. Incididunt dolor minim do. Cupidatat esse fugiat sunt laboris. Ex mollit do ex dolor culpa dolore. Laborum proident irure in.

Incididunt et laboris occaecat incididunt. Amet esse id ipsum. Veniam cillum elit duis quis reprehenderit ullamco. Aute proident quis aute. Do do adipisicing id enim elit. Do velit nulla dolor exercitation. Eiusmod irure voluptate minim voluptate. Veniam exercitation ea labore anim dolore. Excepteur nulla mollit culpa. Aliqua cillum commodo sunt commodo. Elit est sint incididunt. Aliqua elit aliquip et id id. Exercitation amet laboris deserunt exercitation aute exercitation. Labore cupidatat nisi ut reprehenderit anim do.

Est cillum pariatur laboris aute labore. Ad ipsum eiusmod qui proident. Quis quis qui amet esse Lorem esse. Sit ea eu reprehenderit veniam consequat nulla. Sunt tempor exercitation in duis non reprehenderit. Enim mollit culpa Lorem aute laboris. Commodo consequat duis ea fugiat. Do eu adipisicing occaecat culpa. Velit proident et officia dolor voluptate ipsum.

Nostrud velit dolor minim est. Minim consequat reprehenderit sint esse. Veniam excepteur ipsum enim.

## Ullamco laboris ut qui mollit adipisicing.

Ea fugiat tempor irure incididunt ad. Est minim cupidatat veniam duis. Excepteur cillum mollit fugiat proident.

Proident adipisicing mollit commodo do cillum dolor. Est esse exercitation eiusmod fugiat commodo. Laborum duis velit laboris incididunt dolore non. Dolore nostrud in do magna adipisicing. Eu veniam exercitation culpa id. Dolore Lorem magna officia Lorem deserunt eu. Labore ullamco sunt ex. Dolore qui enim consectetur laboris pariatur. Do tempor duis proident Lorem. Culpa quis sit in pariatur mollit. Nulla cupidatat veniam proident ea. Aliquip ea laborum esse in. Laboris est est enim.

Culpa incididunt deserunt id aute commodo irure. Ipsum duis tempor consequat. Sunt in duis reprehenderit id magna dolore.

Veniam ullamco anim est irure excepteur. Quis nostrud esse adipisicing. Eu mollit dolore laboris labore enim. Elit ullamco occaecat sunt. Aliquip non sit enim ut exercitation nisi. Minim occaecat ullamco nisi laborum ad. Velit eu deserunt sit cillum veniam qui. Deserunt ullamco reprehenderit laborum eiusmod enim cupidatat. Esse culpa laborum adipisicing dolore laborum. Anim aliqua et Lorem aute. Et ex aliqua consectetur. Duis excepteur eu est ex. Quis non eiusmod aliqua commodo.

Tempor est occaecat sunt culpa. Fugiat voluptate veniam non labore duis. Officia qui commodo incididunt esse. Ut velit sint fugiat excepteur consequat. Laboris esse id nostrud consequat. Nisi amet eiusmod occaecat. Reprehenderit qui nostrud reprehenderit. Dolore qui mollit excepteur nulla. Sit labore non sint aute. Dolor dolor irure sit nisi ut. Amet velit nisi ea. Est irure excepteur quis sunt elit ea. Fugiat velit aute et. Voluptate non cupidatat aute sunt. Nostrud labore amet quis non incididunt consequat.

Culpa sint mollit veniam. Officia veniam id consectetur commodo incididunt ipsum. Enim culpa irure nulla.

Nulla deserunt labore pariatur sunt nulla. Elit fugiat sunt dolor velit ea cupidatat. Nulla voluptate deserunt id ut velit qui. Cupidatat culpa elit Lorem aliqua quis. Ipsum et cillum veniam. Eiusmod Lorem id Lorem duis. Nulla dolor culpa est enim irure. Et velit occaecat fugiat. Enim velit commodo laboris laboris sit amet. Nostrud voluptate aute in. Sint reprehenderit ut enim eiusmod aliquip.

## Culpa elit exercitation veniam fugiat anim ex.

Eiusmod fugiat enim ipsum non. In culpa quis nostrud anim occaecat ex. Aute sint et officia pariatur occaecat. Lorem ipsum deserunt voluptate. Reprehenderit est sint magna qui. Do esse est dolore commodo cillum. In tempor exercitation laboris proident cillum nostrud. Lorem officia Lorem reprehenderit veniam. Esse ad reprehenderit voluptate in. Ullamco anim ullamco dolor ullamco deserunt. Culpa tempor enim sint ex duis cupidatat.
`

const standardImageObject = {
    name: "Image",
    src: "/large:w1917-h1014.svg",
    alt: "a large svg, rendered via the Image component and optimized with width and height",
    title: "a large svg, rendered via the Image component and optimized with width and height",
}

let data = {
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

[link to about page](/about)

${getPageInfo()}
`,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1725320604553,
                },
            ],
        },
    },
    about: {
        content: {
            components: [
                {
                    name: "Markdown",
                    text: `n
# About Me

![A picture of me, Timothy Malstead](/tim_malstead_profile_pic:w400-h400.jpg "A picture of me, Timothy Malstead")

My name is Timothy Malstead. I am a software engineer and artist in Los Angeles, California with a strong belief that software, and the open web in particular, are among the most powerful tools we have for improving our world. My goal is to create software that is easy to use, easy to understand, and easy to maintain and I value simplicity, clarity and brevity in all things. I am very happy that you have taken the time to visit my site and I hope you find something here that you enjoy.

HAVE_A_RESUME_HERE

If I sound like your kind of guy, then you may enjoy some of the following pages:

* [Data Use and Policies](/data)
* [Why I Like the Web](/why-i-like-the-web)
* [Manifesto](/manifesto)
`,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1727750775738,
                },
            ],
        },
    },
    // This page uses hardcoded loerm ipsum content in the second markdown component to test the read percentage, as specific amounts are needed to scroll for the tests
    "read-percentage-example": {
        content: {
            components: [
                {
                    name: "Markdown",
                    text: `
# Read percentage page mock
${getPageInfo()}
`,
                    useReadPercentage: false,
                },
                {
                    name: "Markdown",
                    text: `
## Read percentage sub-heading

${staticDataForReadPercentage.repeat(5)}
`,
                    useReadPercentage: true,
                },
                {
                    name: "Markdown",
                    text: `
${staticDataForReadPercentage.repeat(5)}

## End of page
`,
                    useReadPercentage: false,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1725824145210,
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
                standardImageObject,
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
    "array-examples": {
        content: {
            components: [
                {
                    name: "Markdown",
                    text: `
# Array example page mock info
${getPageInfo()}
`,
                },
                {
                    name: "Array",
                    useReadPercentage: true,
                    components: [
                        standardImageObject,
                        standardImageObject,
                        standardImageObject,
                    ],
                },
                standardImageObject,
                standardImageObject,
                standardImageObject,
                {
                    name: "LastModified",
                    lastModifiedDate: 1725935835263,
                },
            ],
        },
    },
    "component-data": {
        header: {
            content: {
                data: {
                    components: [
                        {
                            name: "Link",
                            text: "about",
                            href: "/about",
                            inline: false,
                        },
                    ],
                },
            },
        },
        footer: {
            content: {
                data: {
                    components: [
                        {
                            name: "Link",
                            text: "about me",
                            href: "/about",
                            inline: false,
                        },
                        {
                            name: "Link",
                            text: "data use and policies",
                            href: "/data",
                            inline: false,
                        },
                        {
                            name: "Link",
                            text: "why i like the web",
                            href: "/why-i-like-the-web",
                            inline: false,
                        },
                        {
                            name: "Link",
                            text: "manifesto",
                            href: "/manifesto",
                            inline: false,
                        },
                    ],
                },
            },
        },
    },
    "header-and-footer": {
        content: {
            components: [],
        },
    },
    "read-success": {
        content: {
            components: [
                {
                    name: "Markdown",
                    text: "# SUCCESS!",
                },
            ],
        },
    },
    "delete-success": {
        content: {
            components: [
                {
                    name: "Markdown",
                    text: "# DELETE THIS DATA!",
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
        const dataLength = splitKeyArray.length - 1
        return {
            get: async () => {
                let tempData = data
                for (const key of splitKeyArray) {
                    tempData = tempData[key]
                    if (tempData === undefined) break
                }
                return {
                    data: () => tempData,
                }
            },
            // TODO: this will only delete up to the content key, so I'll see if I can improve it later
            delete: async () => {
                let deleteString = "delete data"
                for (const key of splitKeyArray) {
                    if (key === "content") break
                    else deleteString += `["${key}"]`
                }
                // i know, i know, e-VAL is e-VIL, but it's a fine way to dynamically delete nested objects, and it's only for tests
                const deleteScript = `
                    "use strict"
                    const data = ${JSON.stringify(data)}
                    ${deleteString}
                    data
                `
                data = eval?.(deleteScript)
            },
            set: async (newData) => {
                let dataToAdd = {}
                for (let i = dataLength; i >= 0; i--) {
                    const key = splitKeyArray[i]
                    if (i === dataLength) dataToAdd[key] = newData
                    else {
                        const tempData = {}
                        tempData[key] = dataToAdd
                        dataToAdd = tempData
                    }
                }
                data = { ...data, ...dataToAdd }
            },
        }
    }
}

module.exports = { Firestore }
