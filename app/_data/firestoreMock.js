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
                    response:
                        "you are authorized to access the api for this test",
                },
            },
        },
    },
    home: {
        content: {
            metadata: {
                openGraph: {
                    description:
                        "The website of Timothy Malstead, a software engineer and artist from the United States.",
                    locale: "en_US",
                    title: "Timothy Malstead",
                    type: "website",
                    url: "https://www.timothymalstead.com",
                    images: [
                        {
                            alt: "A picture of me, Timothy Malstead",
                            height: 400,
                            width: 400,
                            url: "https://www.timothymalstead.com/assets/home/tim_malstead_profile_pic.webp",
                        },
                    ],
                },
            },
            components: [
                {
                    name: "Image",
                    src: "/tim_malstead_profile_pic.webp",
                    alt: "A picture of me, Timothy Malstead",
                    title: "A picture of me, Timothy Malstead",
                    width: 400,
                    height: 400,
                    fill: false,
                    priority: true,
                },
                {
                    name: "Markdown",
                    text: `
# Hello, I am Timothy Malstead

I am a software engineer and artist living in Los Angeles, California. 

I believe that software, and the open web in particular, are among the most powerful tools we have for improving our world.

My goal is to create software that is easy to use, easy to understand, and easy to maintain.

I value simplicity, clarity and brevity in all things.

Thank you for taking the time to visit, I hope you find something here that you enjoy.
`,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1735243319529,
                },
            ],
        },
    },
    blog: {
        content: {
            metadata: {
                title: "Blog",
                description:
                    "The blog of Timothy Malstead, a software engineer and artist from the United States.",
                openGraph: {
                    description:
                        "The blog of Timothy Malstead, a software engineer and artist from the United States.",
                    locale: "en_US",
                    title: "Blog",
                    type: "website",
                    url: "https://www.timothymalstead.com/blog",
                },
            },
            components: [
                {
                    name: "Markdown",
                    text: "# Under Construction",
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1734833971416,
                },
            ],
        },
    },
    about: {
        content: {
            metadata: {
                title: "About Me",
                description: "All about Timothy Malstead",
                openGraph: {
                    description: "All about Timothy Malstead",
                    locale: "en_US",
                    title: "About Me",
                    type: "website",
                    url: "https://www.timothymalstead.com/about",
                },
            },
            components: [
                {
                    name: "Markdown",
                    text: `
# About Me

Hello, my name is Timothy Malstead.

I am a software engineer living in Los Angeles, California.

First of all, thank you for taking the time to visit my site. Read on to learn more about me and my work.

## Professional Background

## Resume
`,
                },
                {
                    name: "Object",
                    data: "https://drive.google.com/file/d/15sP41AH8-kKbI1N3OdC7EcRuwbxuuT--/preview",
                    type: "application/pdf",
                    width: "100%",
                    height: "600",
                },
                {
                    name: "Markdown",
                    text: `

## Values

## Why I Like the Web
                    
## Art
`,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1735684044731,
                },
            ],
        },
    },
    data: {
        content: {
            metadata: {
                title: "Data Use and Policies",
                description:
                    "An outline of the data use and policies for timothymalstead.com",
                openGraph: {
                    description:
                        "An outline of the data use and policies for timothymalstead.com",
                    locale: "en_US",
                    title: "Data Use and Policies",
                    type: "website",
                    url: "https://www.timothymalstead.com/data",
                },
            },
            components: [
                {
                    name: "Markdown",
                    text: `
# Data Use and Policies

It is the policy of myself and this site to respect your privacy and data.

In this spirit, I only collect basic information about your visit to this site, such as the pages you visit and the time you spend on each page.

I do not share this information with any third parties, and I do not use it for any purpose other than to improve the content and performance of this site.

To gather this information, I *solely* use the default implementation of Google Analytics.

__This implementation does not collect any personally identifiable information.__

For more information about the specific information collected by the default implementation of Google Analytics, please see this [Google Support Article](https://support.google.com/analytics/answer/11593727?hl=en).

If there are any changes in my data collection or use policies, I will update this page to reflect those changes.
`,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1735684044731,
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
    "local-static-data-tests": {
        "image-examples": {
            content: {
                data: {
                    components: [
                        {
                            name: "Markdown",
                            text: `![a large svg, rendered via markdown and loaded without width and height](/large.svg "a large svg, rendered via markdown and loaded without width and height")
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
        },
        "array-examples": {
            content: {
                data: {
                    components: [
                        {
                            name: "Markdown",
                            text: `# Array example page mock info
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
        },
    },
    "component-data": {
        header: {
            content: {
                data: {
                    components: [
                        {
                            name: "Link",
                            text: "blog",
                            href: "/blog",
                            inline: false,
                        },
                        {
                            name: "Link",
                            text: "about",
                            href: "/about",
                            inline: false,
                        },
                        {
                            name: "Link",
                            text: "data use",
                            href: "/data",
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
                            text: "blog",
                            href: "/blog",
                            inline: false,
                        },
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
    "create-failure": {
        content: {
            components: [
                {
                    name: "Markdown",
                    text: "# DATA ALREADY HERE!",
                },
            ],
        },
    },
    "overwrite-success": {
        content: {
            components: [
                {
                    name: "Markdown",
                    text: "# OVERWRITE THIS DATA!",
                },
            ],
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
