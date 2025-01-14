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
                    text: "# Blog Posts",
                },
                {
                    name: "Markdown",
                    text: `
- [How to Over-Engineer Your Personal Site, Part One: The Why Of It](/blog/over-engineer-your-site-part-1)
`,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1736822462075,
                },
            ],
        },
        "over-engineer-your-site-part-1": {
            content: {
                data: {
                    metadata: {
                        title: "How to Over-Engineer Your Personal Site: Part One",
                        description:
                            "First entry in a series about how I redid my personal website",
                        openGraph: {
                            description:
                                "First entry in a series about how I redid my personal website",
                            locale: "en_US",
                            title: "How to Over-Engineer Your Personal Site: Part One",
                            type: "website",
                            url: "https://www.timothymalstead.com/blog/over-engineer-your-site-part-1",
                        },
                    },
                    components: [
                        {
                            name: "Markdown",
                            text: `              
# How to Over-Engineer Your Personal Site
## Part One: The Why Of It
A personal website.

I think that it has value in the tech space. A well designed personal site is a testament to your skills as an engineer. I have never been hired for a job *only* on the strength of my personal site, but I know from conversations with recruiters that it has played a part in hiring decisions.

A personal site can demonstrate your visual sense, how you organize your thoughts, and what you feel is most important to convey to the world. Add in a link to the code and prospective employers have a direct line to how you architect a project, how you reason through code, what tools/frameworks/languages you use (well and otherwise) and how you build up your projects via commits.

I have not worked on my personal site in quite some time, and I wish to redo it from the ground up.

## History
My [current personal site](https://www.timmalstead.com/) started to come to life in the early days of 2020. I am a career switcher and had just finished a software engineering boot camp at the end of 2019. I was gearing up to begin my first job search in my new field when the pandemic hit.

I found myself with quite a bit of time on my hands in those early lockdown days. In between applying for jobs and interviewing, I worked on a portfolio site. It showcased my school, volunteer and personal projects up to that point.

Looking at that site now I can say that it is... okay. Not bad, not amazing. Very much the product of someone playing with new toys. I was less than six months out from writing my very first line of code and I believe that site reflects the novelty I still found in pretty much every aspect of the act of app creation.

There is a spinning logo for no reason, way more motion than is needed, the ability to choose your own color scheme. All kind of fun, and all very reflective of who I was and how I looked at code at the time: as a new toy.

I *loved* that time in my life. It was amazing and I would not trade it for the world. Learning how to express myself through code, how to organize my thoughts and what applications should and should not be was downright revelatory, and I still like a nice subtle animation. But now I wish to present a different image to the world. That of an experienced engineer who considers the why of things before jumping straight into the how and who keeps the should firmly in mind over the could.

## Execution
This project will be much more complex than it needs to be, by design. I wish to take what I have learned about building applications in the last few years, and massively over-engineer what could be done in a few static HTML files.

This will include:

- Deployment on a modern cloud infrastructure (GCP)
- A personal top level domain
- Infrastructure as code
- Modern CI/CD practices
- Containerization as a rule
- Testing as a default
- and probably more as things go along, multiple envs etc.

I have more experience with some of these things than others, but I could stand to get better with all of them. Thus will this exercise serve as a review in certain places and a fresh challenge in others. I have enough faith in myself and my skills to undertake this challenge. I also have enough of an ego that, if anyone is actually reading this, I have succeeded in at least some of my goals.

## Practices

As it turns out, software is difficult to make and even harder to make well.

It is very easy for me to become discouraged about a new project or get down on myself when things are not going well. Such a judgmental self-view is not very conducive to exploring new concepts and projects.

So with this project I shall make it a point to take a more exploratory and less critical approach. I want to make good software and I want to make software that works, but a critical element of that is including and examining the things I struggle with just as much as I do the things I succeed at.

Next time: [Tools](/blog/over-engineer-your-site-part-2)
`,
                        },
                        {
                            name: "LastModified",
                            lastModifiedDate: 1736820717920,
                        },
                    ],
                },
            },
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

Hello, my name is Timothy Malstead. I am a software engineer and artist living in Los Angeles, California.

Thank you for taking the time to visit my site. Read on to learn more about me and my work.

## Professional Background

Originally trained in clothing and fabric design, I enjoyed a career in the textile industry for several years. For most of that time, I focused on printed womenswear; holding various roles in printing, coloring and technical design. Looking back, I can see that my time spent developing creative visual projects constrained by hard technical limitations helped me cultivate a logical and algorithmic way of thinking that has continued to serve me well in the software field.

This time in my life also helped me create strong aesthetic principles which have translated well into my work in customer facing applications. I enjoy simple and austere layouts, with clean colors and fonts that allow the content to be front and center.

After several satisfying years, I began to wonder what my next steps in life might be. The fabric world was fine and had treated me well, but the work that I was doing had become rote. What had previously been a career full of creative and technical challenges had gradually become an overly repetitive slog.

A friend of mine who works in software suggested I might have a talent for it as well. I decided to take his advice and, after some self directed learning, I attended the [General Assembly](https://generalassemb.ly/) immersive program on the full-stack software engineering track. It was here that I learned the fundamentals of software engineering and computer science, with a particular focus on the web and web applications.

Soon after my graduation from General Assembly, the world was struck by the global Covid 19 pandemic. Like so many others, I found myself in lockdown, fearful and anxious for the future, and for the state of my burgeoning software career.

During this time, I was fortunate to find freelance dev work with clients like the robotics startup [Standard Bots](https://standardbots.com/), and also volunteered with the civic tech organization [Hack for LA](https://www.hackforla.org/). With these projects, I was able to roll up my sleeves and get practical experience on production code bases. In the case of Hack for LA, I was also able to work on projects that improved the lives of real people, such as the community housing workflow tool [Home Unite Us](https://www.hackforla.org/projects/home-unite-us) and the Los Angeles area food bank location tool [Food Oasis](https://foodoasis.la/).

Through my work with Hack for LA, I was invited to apply for a fellowship with [Code for America](https://codeforamerica.org/). I did so, and in October of 2020 I was accepted into the [Code for America Community Fellowship](https://codeforamerica.org/news/announcing-the-2020-code-for-america-community-fellowship/), on a [small team](https://codeforamerica.org/news/meet-the-community-fellows-team-santa-barbara-county/) partnered with the [Santa Barbara County Public Defenders Office](https://www.countyofsb.org/187/Public-Defender).

Over the next 14 months, we worked to create [Thrive SBC](https://www.thrivesbc.com/), a resource app specifically designed to help and empower the justice impacted population of Santa Barbara county. We worked to gather and share information on food aid, medical and legal services, employment, substance abuse recovery and much more.

I am particularly proud of the [Fresh Start](https://www.thrivesbc.com/freshstart) section of Thrive SBC, of which I was the primary architect and engineer. This tool greatly simplifies applying for criminal record expungement. We were able to take what had previously been a little known and onerous procedure and offer it as a simplified one form process that sends a fully qualified and recognized legal application for expungement straight to the public defenders office. As someone who has seen justice impacted family and friends attempts to gain employment and other services stymied by the continued impact of their criminal records, being able to create a tool like Fresh Start ranks among the proudest moments of my software career.

At the beginning of 2022, I accepted a position with [ThoughtWorks](https://www.thoughtworks.com/) and I have been there ever since. ThoughtWorks is a leading global technology consultancy that integrates strategy, design and software engineering to enable our clients to thrive.

Since my start with ThoughtWorks, I have been working with the Gap family of brands, including [Gap](https://www.gap.com/), [Old Navy](https://oldnavy.gap.com/) and [Athleta](https://athleta.gap.com/). My focus has been on customer facing components that are used across all areas of the site. Here my design experience has served me well, creating visually appealing web components with the flexibility to be deployed and controlled in a headless manner.

Less than a year after starting in this position, I was asked to become one of the technical leads on the project. While certainly a large adjustment, taking a leadership role has been immensely satisfying. In addition to my programming and other code related duties, I now take part in architecture decisions, planning, creating customer stories, managing sprints and mentoring junior colleagues.

The past several months at the Gap have seen a great deal of transition, as we move from a "traditional" single page application (React) organized in a distributed micro front end system to a server side first architecture (Next.js). The performance and optimization gains that can be realized in such a system are extremely exciting, and rewriting our components to take advantage of these features has been a very rewarding experience.

These days, I continue to be excited about the present and future state of software, and the web in particular. I plan on continuing to learn as much as I can, and working on interesting software projects, for many years to come.

## Resume
`,
                },
                {
                    name: "Object",
                    permissionRequired: true,
                    permissionMessage: "click to view my resume (PDF)",
                    permissionAlt:
                        "Note that this is a PDF document and is large in size compared to the other elements on the page",
                    data: "https://drive.google.com/file/d/15sP41AH8-kKbI1N3OdC7EcRuwbxuuT--/preview",
                    type: "application/pdf",
                    width: "100%",
                    height: "600",
                },
                {
                    name: "Markdown",
                    text: `

## My View On Software Engineering

I approach software first and foremost as a collaborative effort. Even when working solo on a personal project, I remain mindful of the legions of talented architects, engineers, designers and others that have worked on tools, hardware, systems, languages and frameworks that allow me to do my work.No one person can understand all there is to know about software, and thus no one person should regard their knowledge as wholly authoritative.

When working with a team, this means cultivating an environment where engineers feel encouraged to ask questions and admit when they do not know something. It also means being quick to admit when I do not know something.

Secondly, I regard software as a constant state of learning *and* teaching. The tools we use change constantly, and it is important to change with them. For me, this means being humble before complexity and giving myself time and patience to absorb new ideas and new modes of working. It also means extending that time and patience to other members on my team, particularly the junior members. I take great joy in passing on my knowledge to other engineers, and in learning from them as well.

Lastly, I approach software in a spirit of stewardship. Whether on a team, a codebase, a feature or even a single commit, I remember that none of these things begin or end with me. By seeking to communicate my ideas as clearly as possible, be it through speech, documentation or code, I seek to improve a project with value that will persist, whether or not I continue to be involved.

## Art and Writing

While no longer my primary profession, I continue to enjoy creating visual art. This most often takes the form of drawing and painting. I look to my art as a way to indulge my completely selfish and un-collaborative impulses; basically everything I seek *not* to do in software.

In the past few years I have been exploring a style somewhere between figurative and cartoonish, usually with high chroma color schemes influenced by my time in fabric design.

At present, I do not have any of my visual work featured on this site. My initial focus is the basic informational pages and the blog. After that is complete, I intend to create an art section.

Regarding my blog, I shall do my best to communicate ideas I find interesting, in a clear and concise manner. I am not entirely sure what the subject matter will be, but I think that I am going to have fun finding out.

With art, blogging, and social media, I will not be keeping to a regular cadence of creation. I will post when I feel that I have something worthwhile to communicate, which may be infrequently. In the past, I have sought to impose a quota on my creation. It did not work. It led to resentment of my creative work, which is the exact opposite of what I want from my creative outlets.
`,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1736819724596,
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
                            text: "data",
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
