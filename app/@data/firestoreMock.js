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
### How to Over-Engineer Your Personal Site
- [Part One: The Why Of It](/blog/over-engineer-your-site-part-1)
- [Part Two: Tools](/blog/over-engineer-your-site-part-2)
- [Part Three: Head in the Clouds](/blog/over-engineer-your-site-part-3)
- [Part Four: At Your (Web) Service](/blog/over-engineer-your-site-part-4)
- [Part Five: An Appetizing App](/blog/over-engineer-your-site-part-5)
`,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1736987829980,
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
        "over-engineer-your-site-part-2": {
            content: {
                data: {
                    metadata: {
                        title: "How to Over-Engineer Your Personal Site: Part Two",
                        description:
                            "Second entry in a series about how I redid my personal website, focusing on tools",
                        openGraph: {
                            description:
                                "Second entry in a series about how I redid my personal website, focusing on tools",
                            locale: "en_US",
                            title: "How to Over-Engineer Your Personal Site: Part Two",
                            type: "website",
                            url: "https://www.timothymalstead.com/blog/over-engineer-your-site-part-2",
                        },
                    },
                    components: [
                        {
                            name: "Markdown",
                            text: `              
# How to Over-Engineer Your Personal Site
## Part Two: Tools
The tools to be used in my website redesign will include:

- Cloud provider: [Google Cloud Platform (GCP)](https://cloud.google.com/gcp)
- Languages: [TypeScript](https://www.typescriptlang.org) and [JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- Version control: [Git](https://git-scm.com/) and [GitHub](https://github.com/)
- Infrastructure as code (IAC): [Pulumi](https://www.pulumi.com/)
- Web framework: [NextJS](https://nextjs.org/)
- Continuous integration / continuous deployment (CI/CD): [CircleCI](https://circleci.com/)
- Secrets management: [1Password](https://1password.com/)
- Unit testing: [Jest](https://jestjs.io/)
- Containerization: [Docker](https://www.docker.com/) and [Docker Desktop](https://docs.docker.com/desktop/)
- TBD: Logging, Integration testing, Other security features

## GCP

I like Google products. They tend to be straightforward and reasonably easy to use. This extends to their cloud offerings as well. AWS is great, and very inexpensive, but its documentation is sometimes lacking. Same with Azure. GCP can cost a bit more but it is easier for me to wrap my head around as a whole.

To start with I will be primarily using GCP and its managed service Cloud Run. This should allow me a good amount of configurability without me needing to get too deep into the low level weeds. I will also be using their DNS services, Cloud Storage, Cloud Functions and likely the managed NOSQL service Firestore for data persistence.

## TypeScript and JavaScript

This will be a website, and a web browser understands JavaScript, so that is a given. Also, some config  and NodeJS files will need to be done in plain vanilla JS. I like static typing, so I will try to keep plain JavaScript files to a minimum.

Static typing makes life easier, because it makes software easier to understand. Projects can explode in complexity unexpectedly, and no one is going to remember the parameters of a function they wrote 6 months ago. TypeScript will help me avoid this problem.

## Git and GitHub

No big mysteries here. Git is the industry standard for version control and GitHub is an easy place to put your code and interfaces with just about everything. I *could* look into GitLab or BitBucket, but honestly I do not feel like getting too adventurous with that part of the project.

## Pulumi

Here is a part I *am* trying to get adventurous on. I would like to control and provision my GCP resources using code as much as possible instead of the console. Why? Because it is easy to forget things when done manually and hard to recreate if needed. I could go for the Haschicorp IAC tool [Terraform](https://www.terraform.io/) but... I do not have a great desire to learn a language that is ONLY used for IAC. With Pulumi I will be able to use TypeScript, which I already know and am comfortable with. Other supported languages include JavaScript, Go and Python. Seriously, its a cool tool. Go check it out.

## NextJs

NextJs is a full stack web framework built on top of [React](https://react.dev/) that allows for all the cool client side capabilities of a single page application (SPA) as well as server side rendering (SSR), static path generation, serverless Node functions and integration with server side React components. I like to think of NextJs as the best parts of an SPA mixed with the best parts of an MVC framework.

In addition, I am going to see if a Micro Frontend (MFE) architecture for this project will make sense. If this is enacted, it will mean that different parts of the site will be hosted by different endpoints, and assembled on the client side for the user to consume as a single experience. I will attempt to do this using Webpack [Module Federation feature](https://webpack.js.org/concepts/module-federation/). Wish me luck.

I have worked with both SSR and Mod Fed for a while now at my day job, and I am excited to see how far I can go with them on my own. This is one of the features that I will enjoy (over) engineering most.

(Update: MFE definitely did *not* make sense for this project)

## CircleCI

CircleCi is an industry standard managed CI/CD platform. It will allow me to set up pipelines for my site, provisioned infrastructure, serverless functions and anything else I wish to connect it to. I have worked with it a bit but will definitely need to up my game for this project. My goal for its use is get to a level where I can "set it and forget it" as soon as possible. If I wanted to get deep in the configuration of CI/CD pipelines, I would set up a Jenkins instance. I do not want to that, so I will go with a managed service with a great UI and a reputation for interoperability.

## 1Password

1Password is a great collection of software tools. I use it as my personal password manager and at work. Until recently, the only thing missing from this suite was an easy way to integrate 1Password "vaults" with CI/CD pipelines and other automated services. However, with the recent addition of [Service Accounts](https://developer.1password.com/docs/service-accounts/) I feel like this is a chance worth taking.

Again, using the more established tool would mean using  a product from Hashicorp; [Vault](https://www.vaultproject.io/). I have worked with Vault, and it is also good software. But I like the experience of working with 1Password more and service accounts seem like a fun tool to play with, so I am gonna go with that.

## Jest

Opinions differ on unit testing. I try not to go overboard with it, but I do like to know that my components and other small pieces of code work. I have a lot of experience with Jest, and I can integrate it easily with React and whatever other tools I end up using in Node.

## Docker and Docker Desktop

Continuing a pattern, Docker and Docker Desktop are both mature, extensively documented and well supported tools that will allow me to use containers to develop and deploy in the same containerized environments. Once more, I could get adventurous with my selection of tools, but I am choosing not to.

## Conclusion

I think that these tools will give me a solid foundation to build my project on. There is a healthy enough mix of tools that I am familiar with and ones that I am not to keep me interested and chugging along long enough to see this project to its end. I am excited to see what will happen!

Next time: [Head in the clouds](/blog/over-engineer-your-site-part-3)
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
        "over-engineer-your-site-part-3": {
            content: {
                data: {
                    metadata: {
                        title: "How to Over-Engineer Your Personal Site: Part Three",
                        description:
                            "Third entry in a series about how I redid my personal website, focusing on Google Cloud",
                        openGraph: {
                            description:
                                "Third entry in a series about how I redid my personal website, focusing on Google Cloud",
                            locale: "en_US",
                            title: "How to Over-Engineer Your Personal Site: Part Three",
                            type: "website",
                            url: "https://www.timothymalstead.com/blog/over-engineer-your-site-part-3",
                        },
                    },
                    components: [
                        {
                            name: "Markdown",
                            text: `
# How to Over-Engineer Your Personal Site
## Part Three: Head in the Clouds

Now that we better understand the scope of the project, and the tools that we will use: we can create the underlying infrastructure with which to run it.
`,
                        },
                        {
                            name: "Markdown",
                            useReadPercentage: true,
                            text: `
## Create Your Project
To start with, we will create a project in GCP. If you do not have one, create a Google account and use it to sign in to [GCP welcome page](https://console.cloud.google.com/welcome). You should see a dropdown in the upper left of the page, click on it and select the "New Project" button in the upper right corner of the modal that will pop up.

![Create a new GCP project](/projects.png)

Fill out your info for your new project. The convention for GCP is that you select your \`Project name\`, and that your \`Project ID\` is your \`Project name\` plus a dash and a generated number. Note that while you CAN change your \`Project name\` after its creation, your \`Project ID\` cannot be changed later; so make sure you *really* like it before finalizing your project details.

Since my project is a personal site hosted on GCP, I will go ahead and call it \`personal-site-gcp\`. Google will take a few moments to create your project and should present you with an option to go to your project dashboard after that. Your dashboard should look something like this.

![My new project](/dashboard.png)

## gcloud
Our goal is to interact with our project via CLI and IaC as much as possible, so go ahead and install the GCP CLI tool, [gcloud](https://cloud.google.com/sdk/docs/install). I am working with macOS for this tutorial, but any supported OS should work with these steps.

Once your installation has finished, login to your Google account by entering \`gcloud auth login\`. This will trigger an authentication flow via your web browser. After you have signed in, you should see a confirmation in your terminal as well.

Now that we are signed in, we will make sure our \`gcloud\` is pointed at the correct project. Run \`gcloud config set project <YOUR_GCP_PROJECT_ID>\` substituting the \`Project ID\` you received when you created your project.

Lastly, Pulumi will need [Application Default Credentials](https://cloud.google.com/sdk/gcloud/reference/auth/application-default/login) to interact with your GCP account and project. These will be stored on your local machine. Run the command \`gcloud auth application-default login\` and you should be directed to another authentication flow via your web browser.

## Set up Pulumi

Install the Pulumi CLI tool using [these instructions](https://www.pulumi.com/docs/clouds/gcp/get-started/begin/). Since I am on a Mac and have [Homebrew](https://brew.sh/) installed, for me it will be as simple as entering \`brew install pulumi/tap/pulumi\`.

Once the installation has finished, enter \`pulumi login\` and you will be able to create a Pulumi cloud account. Pulumi cloud will serve as the source of truth for information about the collection of resources (called a [stack by Pulumi](https://www.pulumi.com/docs/concepts/stack/)) we will be creating on GCP with our project.

Before you leave Pulumi cloud, click on the account info tab in the upper right hand corner of the site and navigate down to the tab marked \`Personal access tokens\`. On the page this takes you to, click on the purple \`Create token\` button. This token will be used to access Pulumi cloud via CircleCI, which we will set up later. I called mine \`circle_ci_token\` because I am creative like that. This token will only be shown to you once, so make sure you store it in a safe place.

## Create your service account via Pulumi

On your local machine, create a directory to house your first Pulumi project. In this directory we will be setting up a [service account](https://cloud.google.com/iam/docs/service-account-overview) and its [iam roles and permissions](https://cloud.google.com/iam/docs/roles-overview). Navigate to the created directory and run \`pulumi new gcp-typescript\`. This is a command to create exactly what we want in this case, a new Pulumi stack for GCP written in TypeScript. Follow the prompts on the CLI, making sure to enter your GCP \`Project ID\` for the last prompt.

Funnily enough, Pulumi creates a \`.gitignore\` file but does not actually create a git instance. Go ahead and enter \`git init\` to start git versioning control.

In our root file \`index.ts\` you will find some boilerplate code. Replace it with this:

\`\`\`typescript
import * as gcp from "@pulumi/gcp"

const pulumiCircleCiService = new gcp.serviceaccount.Account("pulumiCircleCiService", {
	accountId: "pulumi-circle-ci-service",
	displayName: "pulumiCircleCiService",
})

const pulumiCircleCiServiceAccountKey = new gcp.serviceaccount.Key("pulumiCircleCiServiceAccountKey", {
	serviceAccountId: pulumiCircleCiService.name,
})

export default {pulumiCircleCiService, pulumiCircleCiServiceAccountKey}

\`\`\`

This is the first code that we have written, so I will take a step back and talk about what we are doing here.

We are creating a new Service Account to be used by CircleCI to access Pulumi to make changes to GCP. A service account is a special type of account for third party services to access and provision resources for a GCP account. After creating that account we are creating a key associated with that account, which takes the form of credentials we will use on the CircleCi service. It is important to note that these are __bearer credentials__, meaning that whomever possesses them is presumed to be validly accessing these resources. As such, it is vitally important to keep them secure. I will get to that in a bit.

For now, run \`pulumi up\`, which is the command to update a Pulumi stack. If you are logged in properly, this will create three resources, the stack on Pulumi cloud, the service account and the key itself. You will notice in the CLI output that the private key is marked as secret. If you were creating this via the GCP GUI, you would be given a JSON file of the credentials, but only once. In our implementation we can get these credentials anytime we desire, but it will take a bit more work to access. I like you, so I will do it for you below.

## Super secret service account

First, append the following line to your \`.gitignore\` file: \`*[sS]ecrets.*\`. We are going to be saving plain text credentials locally, so we do __not__ want them being tracked in version control. This is a simple glob pattern to tell git that any file that ends with the words "secrets", starting with a capital OR lowercase s, should not be tracked. Pretty reasonable right?

Next, add the following block to your \`package.json\` file

\`\`\`json
"scripts": {
	"parseCreds": "pulumi stack output --show-secrets | xargs -0 node parseCreds.js runWithCli=true serviceAccountKey=pulumiCircleCiServiceAccountKey"
}
\`\`\`
This will allow us to export the [Pulumi CLI stack output command](https://www.pulumi.com/docs/cli/commands/pulumi_stack_output/) in plaintext and work with it via a node file we will create.

Finally, paste the following code into a file created in your root folder called \`parseCreds.js\`

\`\`\`javascript
const {writeFileSync} = require("fs")

const dataWithSecrets = process.argv.pop()
const {serviceAccountKey, runWithCli} = process.argv.slice(2).reduce((acc, arg) => {
	const [key, value] =  arg.split("=")
	acc[key] =  value
	return  acc
},{})  

/**
* @function parseAndSaveCreds
* @param {string} serviceAccountKey - the key to target in the dataWithSecrets object
* @param {JSON} dataWithSecrets - the data containing the secrets
* @description parses the dataWithSecrets JSON object with base64 encoded privateKey and saves the key to a file
* @returns {void}
* @example parseAndSaveCreds("serviceAccountKey", "{"serviceAccountKey": {"privateKey": "base64EncodedKey"}}") => {privateKey saved to file as JSON}
**/
const parseAndSaveCreds = (serviceAccountKey, dataWithSecrets) => {
	try {
		if(!serviceAccountKey || !dataWithSecrets) throw new Error("Missing arguments")
		const selectPreambleCharacters = /[^{]+/ 

		const cleanedText = dataWithSecrets.replace(selectPreambleCharacters, "")
		const {privateKey} = JSON.parse(cleanedText)[serviceAccountKey]
		const decodedData = Buffer.from(privateKey, "base64").toString("ascii")

		writeFileSync(./service-account-secrets.json, decodedData) 

		console.info("Successfully parsed credentials")
		process.exit(0)
	} catch (error) {
		console.error("Parsing failed with following error: ", error)
		process.exit(1)
	}
}

runWithCli === "true" && parseAndSaveCreds(serviceAccountKey, dataWithSecrets)  

module.exports = {parseAndSaveCreds}

\`\`\`
There is a lot going on here, so I will break it down.

First of all, if everything goes right, our goal will be to write a JSON file, so we unpack the \`writeFileSync\` function from the standard node \`fs\` library.

Next, since we are passing the stack info into the node process via [xargs](https://en.wikipedia.org/wiki/Xargs) we can count on it being the *last* entry in the \`process.argv\` array. I actually am not sure why xargs does this, but I do know that it is a reliable behavior, so we will pop it off the array and cache it in a variable. If anyone is familiar with why and how xargs does this, I would love to learn about it.

Next we will slice all the command line arguments *after* the first two, as in node the first two arguments are always the location of the node installation on a system and the name of the file. I know what these arguments are going to be named, so I am going to reduce them to two named variables, both to be used later.

Before we get into the parsing function itself, I want to talk about the triggering mechanism I chose. For now I have not thought of an implementation beyond using it with command line arguments. However, if I do need to use it in a program in the future, I want all the functionality to be available in a discreet and exported function. Additionally, I chose to make it a standard node js file, instead of TypeScript, as this may need to operate in an environment where TypeScript has not yet been installed. This was also my motivation for only using commands and packages found in the node standard library. This file *should* be able to operate in any environment where there is a valid node installation.

Now for the actual \`parseAndSaveCreds\` function. As shown in the documentation comment, it takes two arguments: \`serviceAccountKey\`,  which is a string and \`dataWithSecrets\`, which is the stack data exported from Pulumi in JSON form, as well as some leading preamble text that we will remove.

It is set up in a \`try/catch\` pattern, and any error thrown will be printed to the console and cause the program to exit with a failing exit code.

To start with, we check to make sure that both parameters are present and accounted for, and throw a "missing parameters" error if they are not.

Next we define a RegEx to target all characters before the first curly brace and use it to erase the preamble text.

After the preamble is deleted, we are left with JSON which we can parse and use to extract the \`privateKey\` variable.

It is here where we run into a problem. Even though we exported it with the secrets exposed, Pulumi returns the \`privateKey\` with \`base64\` encoding. I do not know why they do this, but I can roll with it.

To do this we will create a buffer with a \`base64\` encoding and turn it back to a string using \`ascii\`encoding. We will then write this synchronously to a file, write to the console that the parsing was successful and exit with a successful (0) exit code.

Run \`npm run parseCreds\` and you should end up with a new file called \`service-account-secrets.json\` that should NOT be tracked by version control. The file should include the fields \`type\`, \`project_id\`, \`private_key_id\`, \`private_key\` and other information regarding your GCP project and resources associated with the service account.

Before we leave our service account for the time being, we will give it some permissions so it can actually do some things once we start using it on CircleCI. Now, I am cheating a bit for the sake of simplicity. Iam roles are a BIG topic and beyond the scope of what I am trying to do here. I will be giving this service account a basic Editor role, which means it will be able to do things beyond the strict scope of what it needs to do. Not dogmatically Principal of Least Privilege, I know, but it will work for me.

To do this, go to your [GCP Iam dashboard](https://console.cloud.google.com/iam-admin/iam). You should see the account you created the project with listed as \`Owner\`. Click on \`GRANT ACCESS\` and begin typing the email associated with the service account that you created. That account should pop up after a few keystrokes, select it and then select \`Editor\` from the list of basic roles in the \`Role\` selector. Click \`Save\` when you are done. Currently basic roles cannot be granted via Pulumi. I am hoping that this feature is added soon, as one of the big points of this implementation is to do things through IaC and not through the web console.

## 1Password for secrets

For storing our secrets we will be using 1Password. 1Password is a fantastic product both for personal password management and for storing secrets for programmatic use. They are a paid service, but the personal tier is about $3 USD a month and has a two week free trial. I am a big fan.

[Create an account](https://start.1password.com/sign-up) if you do not have one and also install the [1password cli app](https://developer.1password.com/docs/cli/get-started/). I would also encourage you to use their desktop and mobile offerings. I am not paid by them I swear, just a big fan.

Similar to GCP, we will be using a [service account with 1Password](https://developer.1password.com/docs/service-accounts/get-started/#create-a-service-account). This will give us __bearer credentials__ to use to connect from a service, in our case CircleCI, to our 1Password vault, and then access any secrets found within. This means that we do not need to keep multiple secrets in CircleCI. This also greatly simplifies secret management, as with the exception of the 1Password credential itself, secrets will only be stored in one location.

After you have created you service account and stored the access token in a safe place. Take a minute to explore the 1Password cli. Experiment with reading and writing passwords to your vaults. With this tool, we will be able to write references to secrets directly into our pipeline, and have them become meaningful values at runtime. Add the service account credentials you parsed from Pulumi as well as the access token for Pulumi cloud to your 1Password service account vault, they will be important in the next step.

## CircleCi

For this tutorial, I am assuming that you have have a GitHub account and are familiar with the operations of the service. Make sure that you have [ssh access enabled](https://docs.github.com/en/authentication/connecting-to-github-with-ssh) for GitHub.

After that, go ahead and sign up for a [CircleCI account](https://circleci.com/signup/) using your GitHub account as your identity provider. After a few clicks you should have the two linked, easy peasy. Find the link to your organization settings next to the image of a gear in the upper left hand corner and click on it. We are going to [create a context](https://circleci.com/docs/contexts/#create-and-use-a-context) for the shared use of secrets (or secret singular) across our personal site pipelines. Next, [create an environment variable](https://circleci.com/docs/contexts/#environment-variable-usage) in the context called \`OP_SERVICE_ACCOUNT_TOKEN\` and set its value to the token you received from 1Password earlier.

Now that we have GitHub and CircleCi set up and working together, we need to write a small set of instructions for CircleCI to follow whenever we push to our repo. Create a directory at the root of your IaC repo called \`.circleci\` and create a file called \`config.yml\` inside it. To that file, copy the following.

\`\`\`yaml
version: 2.1
orbs:
  onepassword: onepassword/secrets@1.0.0
  pulumi: pulumi/pulumi@2.1.0
jobs:
  build_infra:
    docker:
      - image: node:20
    resource_class: small
    steps:
      - checkout
      - run: 
          name: Install dependencies
          command: npm ci --only=production
      - onepassword/install-cli:
          version: 2.18.0
      - onepassword/export:
          var-name: GOOGLE_CREDENTIALS
          secret-reference: op://personal-site-gcp/pulumiCircleCiService/key
      - pulumi/login:
          access-token: $(op read op://personal-site-gcp/pulumi/circle_ci_token)
      - pulumi/update:
          stack: prod
workflows:
  build:
    jobs:
      - build_infra:
          context:
            - personal_site

\`\`\`
This is where it all comes together! We should go over what this file is doing.

Firstly, we tell CircleCI which version to run. Next, we are going to reference what orbs to use. Orbs are a term that CircleCI uses to refer to collections of complex commands aliased into simpler automatic commands. For example in our file the shell code for the command \`onepassword/export\` is something like:

\`\`\`bash
#!/bin/bash -eo pipefail
#!/bin/bash

# User-Agent info for 1Password CLI
export OP_INTEGRATION_NAME="1Password CircleCI Secrets Orb"
export OP_INTEGRATION_ID="CIR"
export OP_INTEGRATION_BUILDNUMBER="1000001"

random_heredoc_identifier=$(env LC_ALL=C tr -dc a-zA-Z0-9 < /dev/urandom | fold -w 64 | head -n 1) || true
{
    #shellcheck disable=SC2016
    printf export %s=$(cat << "\${PARAM_VAR_NAME}" 
    printf %s\n "\${random_heredoc_identifier}"
    op read "\${PARAM_SECRET_REFERENCE}"
    printf %s\n)\n "\${random_heredoc_identifier}"
} >> "$BASH_ENV"
\`\`\`
As you can see, orbs allow us to greatly simplify our configs and make them much more declarative, focusing on what we need to do and leaving the implementation as much as possible behind the scenes. In many cases they are created and maintained in reference to specific services. This is the case with the orbs we will be using. They are the official orbs of 1Password and Pulumi.

After our orbs, we will describe our job(s). This is a fairly simple config and will only have one job: \`build_infra\`. For this job we must first define the \`docker\` image we would like to use. I will be using the standard node.js 20 image. Next, I have filled the optional \`resource_class\` property to \`small\`. Ultimately, what we need will not take a lot of computing power so I do not want to requisition a great deal of resources we will not actually be using.

The next part of the config describes the steps that will be taken, in order. First, we have the command checkout. This simply checks out our code from GitHub and allows us to use it. After that, we will install our deps using \`npm ci\`. Next we will install our cli tools for 1Password, just as you did on your local machine. It is important to install version \`2.18.0\` or later, as that is the version that introduced the service account feature we are utilizing. Since we set up the \`OP_SERVICE_ACCOUNT_TOKEN\` env var in our context, the 1Password CLI automatically knows to access our service account when any later 1Password CLI commands are entered.

After that, we will use the 1Password orb command \`onepassword/export\` to read our GCP service account credentials, in JSON form, from our 1Password service account and place them in an env var. Once again, we are taking advantage of a default env var setup. Once we start to work with our GCP account, it will know to use the credentials in \`GOOGLE_CREDENTIALS\`. If you could not tell by now, I am a big fan of patterns using default names for env vars. 

Next we will login to Pulumi using our access token, again read from 1Password. And finally we will actually update our code using the \`pulumi/update\` command, which is a thin wrapper around the \`pulumi up\` command we used earlier.

The final part of our config file is info about the workflows. This is not relevant to us as we only have one job to run, but it does allow us to supply info about the context to use, thereby allowing us access to 1Password.

Once you have created a repo in GitHub for your code and pushed it up, you should see it listed in the in your \`Projects\` tab in CircleCi. Go ahead and click the blue \`Set Up Project\` button and you are off to the races. It should automatically detect your config file and should run as soon as you finish setting it up.

The first run is just to make sure everything is working correctly. Pulumi should recognize that no new resources have been requested since the last time the stack was run, and as a result will not seek to create any new resources in GCP. This is one of the great things about Pulumi. It diffs each run and only updates new or changed resources. This saves you time and compute power.

Congratulations, you have set up your infrastructure pipeline!

## Tying it all together

Let us take one more step back and think about our desired flow for infrastructure management. We want it to be code. We want it to be version controlled. We want it to run changes when the repo attached to it is changed. This is what we have set up. When the IaC file(s) in our repo are changed and pushed, GitHub checks the code out to CircleCI, which uses the Pulumi cloud service to interact with GCP and make any needed changes in GCP resources. It does this referencing secrets from 1Password.

As I said at the outset, this is quite a bit more complex than it needs to be. But imagine the utility for a system like this on a team. Infrastructure can be managed like any other code operation. For example, the creation of a new operating environment can take the form of a pull request. Once the team aligns on the specifics on what is needed, it can be merged to main and quickly spun up. If it is no longer needed, simply make the code change removing the resources and it will be eliminated, easy as you please.

I like this system. I want to work with code and I want to be able to understand the resources I am using as code as well.

## Adding a bucket

Before we go, we will add an actual resource to our project.

Create a new folder at the root of your project called \`infra\`. We are dealing with multiple kinds of resources now, so we are gonna organize a bit differently. Pulumi always looks for an \`index.ts\` at the root of the directory, as expects this as the entry point. However, we can setup and import any modules we would wish to this, just like any other TypeScript code. In \`infra\`, create a file called \`service.ts\` and paste the following modified code of the service account and key code that we have created thus far.

\`\`\`typescript
import * as gcp from "@pulumi/gcp"

export const initService = () => {
    const pulumiCircleCiService = new gcp.serviceaccount.Account("pulumiCircleCiService", {
        accountId: "pulumi-circle-ci-service",
        displayName: "pulumiCircleCiService",
    })
    
    const pulumiCircleCiServiceAccountKey = new gcp.serviceaccount.Key("pulumiCircleCiServiceAccountKey", {
        serviceAccountId: pulumiCircleCiService.name,
    })
    
    return {pulumiCircleCiService, pulumiCircleCiServiceAccountKey}
}

\`\`\`
All we are doing here is putting the information about our service account in its own file and exporting a function to init these resources.

Next, create a file called \`storage.ts\` inside \`infra\` and paste the following code:

\`\`\`typescript
import * as gcp from "@pulumi/gcp"

export const initStorage = () => {
    const publicBucket = new gcp.storage.Bucket("public-site-storage", {
        location: "US", 
        uniformBucketLevelAccess: false
    })
    
    const bucket = publicBucket.name
    
    const iamPublic = new gcp.storage.BucketIAMBinding("binding", {
        bucket,
        role: "roles/storage.objectViewer",
        members: ["allUsers"],
    })
    
    const dateObject = {datePulumiLastModified: Date.now()}
    
    const datePulumiLastModified = new gcp.storage.BucketObject("datePulumiLastModified", {
        bucket,
        name: "datePulumiLastModified.json",
        content: JSON.stringify(dateObject),
    })

    return {publicBucket, iamPublic, datePulumiLastModified}
}
\`\`\`

I will go over what this code is doing before we finish, but I will finish with our changed structure first.

Change your root level \`index.ts\` to:

\`\`\`typescript
import {initServiceAccount, initStorage} from "./infra"

const service = initService()
const storage = initStorage()

export default {service, storage}

\`\`\`
I created an additional index file in \`infra\` to export my files in one line, but feel free to import them directly if you prefer.

Now, to the code of \`storage.ts\`! We are creating a storage bucket on GCP and making it visible to the public internet. Lastly we are adding JSON file that has the unix date of when the Pulumi stack was last modified.

Continuing the pattern used with our service account, we will wrap this in a function that will return the Pulumi stack info. 

First we will create the bucket resource itself. I am in the US, so I will create it here. We will also *not* be giving it \`uniformBucketLevelAccess\`, as we wish all objects in this bucket to be accessible from the public internet. This, to my knowledge, can currently only be done in by turning off \`uniformBucketLevelAccess\` and adding a binding of object viewer to all users.

After creating a variable called \`bucket\` that will be the name of the bucket we just created, we will created the \`iam\` binding that will allow all users to view objects in this bucket. We will create this binding with the \`role\` property set to \`roles/storage.objectViewer\` and the \`members\` property set to \`["allUsers"]\`.

Lastly, we will create an object to show when the stack was last updated. Unlike the other Pulumi code that we have written thus far, this will be an operation on a resource that we have created, and not the creation of a resource itself. So, even if we have not changed any resources on our stack (and remember, Pulumi at its heart is an engine to describe desired state) this will *always* insert a new object called \`datePulumiLastModified.json\` with an epoch timestamp of the time it was last run.

We have done quite a lot in this tutorial, and now we have a working pipeline to easily create our GCP resources and a simple bucket for public resources. Next, we will create a public facing web service.

Next time: [Danger is spelled: DNS!](/blog/over-engineer-your-site-part-4)
`,
                        },
                        {
                            name: "LastModified",
                            lastModifiedDate: 1736987829980,
                        },
                    ],
                },
            },
        },
        "over-engineer-your-site-part-4": {
            content: {
                data: {
                    metadata: {
                        title: "How to Over-Engineer Your Personal Site: Part Four",
                        description:
                            "Fourth entry in a series about how I redid my personal website, focusing on website connectivity",
                        openGraph: {
                            description:
                                "Fourth entry in a series about how I redid my personal website, focusing on website connectivity",
                            locale: "en_US",
                            title: "How to Over-Engineer Your Personal Site: Part Four",
                            type: "website",
                            url: "https://www.timothymalstead.com/blog/over-engineer-your-site-part-4",
                        },
                    },
                    components: [
                        {
                            name: "Markdown",
                            text: `
# How to Over-Engineer Your Personal Site
## Part Four: At Your (Web) Service

In this article, we will create a placeholder web site in a container, and adjust our existing infrastructure to deploy it as a web service available to the public.`,
                        },
                        {
                            name: "Markdown",
                            useReadPercentage: true,
                            text: `
## HTML Markup

In a new repo, we will create a file called \`index.html\`.

\`\`\`html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>timothymalstead.com: coming soon</title>
        <style>
            body {
                height: 100vh;
                background-color: #343434;
                color: #ddd;
                font-family: monospace;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            main {
                text-align: center;
            }
            h1 {
                filter: drop-shadow(6px 6px #202020);
            }
        </style>
    </head>
    <body>
        <main>
            <h1>timothymalstead.com</h1>
            <h3>coming soon</h3>
        </main>
    </body>
</html>
\`\`\`
As you can see, this is a simple and static bit of html to inform the user that there will *soon* be a proper website to be found at timothymalstead.com. Not anything too complicated, just a few block elements, styles and some heading elements. Since its only purpose is to display a bit of text, I styled it in such a way as to be viewport agnostic. In other words, whether a user accesses this on a phone, tablet or desktop device, they will see a centered block of text.

I decided to go with a monospace font, because I like monospace fonts. They are unfussy and easy to read. I do not want to go with optic black and white, so I decided to go with a neutral color scheme. For the background, a darker tone of grey, but not too close to optic black. I wanted text with a bit of contrast, but again wanted to avoid optic white. After a bit of experimentation I decided to go with about a 20% grey to contrast with the background. Nice and readable, and should be pretty easy on the eyes. Lastly, for the drop shadow I went with an almost optic black shade of deep grey. Just a little pop for interest, and it draws the eye in nicely.

## Server

Next, we will create a server to deliver our markup to a user. I will just call it \`server.js\`:

\`\`\`javascript
const {createServer} = require("node:http")
const {readFileSync} = require("node:fs")
const {join} = require("node:path")

const multipleSpacesAndNewlines = /(\s{2}|\n)/g
const filePath = join(__dirname, "index.html")
const miniHtml = readFileSync(filePath, "utf8").replace(multipleSpacesAndNewlines, "")

const port = 8080 // cloud run default port
createServer((_, res) => {
  res.statusCode = 200
  res.setHeader("Content-Type", "text/html")
  res.write(miniHtml)
  res.end()
}).listen(port)
\`\`\`
A simple server in 15 lines of code! I will break down what we have going on here.

I wanted to be able to deploy this *without* the need to install npm modules. Thus, we will be basing this server on a few commands available in the node standard library, \`createServer\`, \`readFileSync\` and \`join\` from the \`http\`, \`fs\` (file system) and \`path\` modules respectively.

After we import those, we will create a regex to help minify the final string we will send to a client. This regex will target space characters *IF* 2 or more appear AND it will target newline characters.

Next, we will construct our file path. The \`join\` command exists to create file paths according to the conventions of the system it is run on. Unix and Linux systems denote directories with the forward slash character \`/\` while Windows uses the backslash character \`\\\`. I know that this will be running only on a Mac system, and later in a Linux container. So while this is not strictly necessary, it is still good practice. To assemble our file path, I am using the global \`__dirname\` variable standard in all node files, and \`index.html\` which we created in our previous step. I will be keeping this at the same level of the server. After the \`join\` command has resolved, the \`filePath\` variable will be a string with an absolute path to our markup file.

Next we will read our markup into memory using \`readFileSync\`. As its name suggests, this function allows us to synchronously open a file on our system and use it in our program. It takes two arguments, the \`filePath\` that we constructed previously, and the files encoding. In our case the file encoding will be \`utf8\`. Since \`readFileSync\` resolves to a string, we can use any of the standard string methods available in JavaScript. I will be using the native \`String.replace\` method, along with the regex we made earlier, to grab unneeded space and newline characters and replace them with empty space. This will reduce the size of our payload by about a third. Even before this minifying, our payload will be less than a kilobyte, so it is mostly academic. But it is my project and it makes me happy to deliver two thirds of a kilobyte instead, so that is what I will do.

So, now we have our markup read into memory and we are ready to make a server to actually, you know, serve it.

CloudRun listens for traffic on the \`PORT\` env variable. If you do not explicitly set that, it will default to listening on port \`8080\` . I try to avoid magic numbers, so I will put \`8080\` in a variable and add a note that this is the default for CloudRun. When there is something arbitrary or forgettable like that in a project, I often leave myself a little note like that for the next time I touch it.

 The \`createServer\` function accepts a callback function as an argument. This callback function will be run each time the server receives a request. The callback expects two arguments, one representing the client request and one representing the server response. I will be presenting the same response to anyone, so I will not need the request object. However, since it is a positional argument, I cannot simply omit it. I will use the underscore to make it known that I am intentionally not making use of it.

Since I will not be reading any information from the client request, all of our actions will be concerning the server response, called \`res\` here. First, I will set the \`statusCode\` to \`200\`. After the request has returned to the client, this will inform the client that the request was successful. Next, I will set a header of \`Content-Type: text/html\` in the response. This just tells the client what to expect, in this case plain html. Next we will write the minified html that we have bound to the \`miniHtml\` variable to the response object. If this was a more complex setup this might not make sense, but since we are returning the exact same thing for all requests we can simply hold the string in memory on the server and reference that same string whenever a request comes in. Lastly, we will inform the \`res\` object that we will not be performing further operations by calling the \`end\` method.

So to review, we will set a status code, set a header, write our html and end operations for that request. Pretty easy right?

Lastly, we will call the \`listen\` method on the returned server, and instruct our server to listen on the \`port\` variable we made earlier.

And there you have it, a simple web server to return our static html made with tools from the node standard library!

## Dockerfile and Dockerhub

Next we will containerize our server and markup with a short \`Dockerfile\`.

\`\`\`docker
# syntax=docker/dockerfile:1
FROM node:20-alpine
ENV NODE_ENV production
WORKDIR /usr/src/app
USER node
COPY . .
EXPOSE 8080
CMD node server.js
\`\`\`
Nothing too crazy going on here, just setting up a workspace using the \`node:20-alpine\` image, copying over our (very few) files, exposing the CloudRun default port and starting the server.

As a side note, I am a big fan of using [Alpine Linux](https://www.alpinelinux.org/) containers. They are small and often a perfect choice for production. There are cases where they are a bit under featured, and you may wish to go with a more robust option, but most of the time they suit my needs very well.

For this placeholder I will be using the DockerHub registry to host my image. I may explore using the container registry on GCP in the future, but for this point in time this is the path of least resistance.

Create an account on [DockerHub](https://hub.docker.com/) and enter your login and password in your 1Password service vault. You will need them for the publishing step, which we will of course run on CircleCi.

## CircleCi

We will create a fresh \`config.yml\` in a \`.circleci\` directory at the root of your repo. 

\`\`\`yaml
version: 2.1
orbs:
  onepassword: onepassword/secrets@1.0.0
  docker: circleci/docker@2.4.0
jobs:
  build_placeholder:
    docker:
      - image: cimg/base:current
    resource_class: small
    steps:
      - onepassword/install-cli:
          version: 2.18.0
      - onepassword/export:
          var-name: DOCKER_LOGIN
          secret-reference: op://personal-site-gcp/dockerHub/username
      - onepassword/export:
          var-name: DOCKER_PASSWORD
          secret-reference: op://personal-site-gcp/dockerHub/password
      - setup_remote_docker
      - checkout
      - docker/check
      - docker/build:
          image: timmalstead/personal-site-placeholder
      - docker/push:
          image: timmalstead/personal-site-placeholder
      - run: 
          name: Persist latest build sha
          command: op item edit latest_placeholder sha=$CIRCLE_SHA1
      - run:
          name: Trigger infra build pipeline
          command: |
            curl --request POST \
              --url "https://circleci.com/api/v2/project/gh/timmalstead/personal-site-gcp-infra/pipeline" \
              --header "Circle-Token: $(op read op://personal-site-gcp/circle-ci-api-use/token)"
workflows:
  build:
    jobs:
      - build_placeholder:
          context:
            - personal_site
\`\`\`

Woo! Quite a bit going on here. But I will walk through it all with you.

First we set our version. To be honest, I have not yet had to deal with versioning issues on CircleCi. \`2.1\` has been working well for me, and I hope it continues to do so without incident.

Next we have our orbs. As you no doubt recall from previous posts, orbs are an abstraction that CircleCi uses to alias complicated shell commands and let you use them in a declarative manner. They are great! We will be working with the same 1Password orb as before. This will allow us to access and edit secrets in our service account vault. We will also be working with the official CircleCi Docker orb. This will allow us to easily build and publish our container to the DockerHub registry.

Next we have our jobs section, but I am gonna skip to the end first and briefly describe our workflows section. I am doing this because our workflow is dead simple. We only have one job to run: \`build_placeholder\` and the only parameter we need to provide is to attach our job to the CircleCi context \`personal_site\`. This context contains the key for the env var \`OP_SERVICE_ACCOUNT_TOKEN\` which, combined with the 1Password orb, will allow us access to our service account vault.

Okey doke, back to our job. This is where the magic really happens. First, we need to define what image to use in our \`docker\` field. I will be using the [base convenience image](https://circleci.com/developer/images/image/cimg/base) (\`cimg/base:current\`) maintained by CircleCi. This has lots of helpful tools, such as Git and Curl, that will make our lives that much easier. I always try to save compute power when I can, so I will set the \`resource_class\` property to \`small\`.

Regarding our steps: as you can see, only 2 of our 10 steps are manual \`run\` shell commands. The rest are standard CircleCi commands, like \`checkout\`, or are commands being run from our orbs. This, to me, speaks volumes about the beautiful and declarative nature of CircleCi.  A well functioning and maintained orb allows me to abstract reams of tedious shell code and lets me to focus on the what of my pipeline, instead of the how.

Now we can get into what each of our steps are doing.

First of all, we need to install the 1Password CLI. Recall that we need to install at least version \`2.18.0\` to have access to our service account. When used, this CLI with see the \`OP_SERVICE_ACCOUNT_TOKEN\` env var provided by our context, and access the vault associated with that token. I cannot say it too much, *any* call that has the bearer credential for your service account is assumed to be valid, so please keep your 1Password key safe!

Next we will export the DockerHub credentials you saved in our last step. We will export these as env vars titled \`DOCKER_LOGIN\` and \`DOCKER_PASSWORD\`. These are not randomly selected titles, but rather are variables that Docker orb will look for and associate with our DockerHub account when executing subsequent commands.

Our next command is \`setup_remote_docker\`. According to the [CircleCi documentation](https://circleci.com/docs/building-docker-images/) on running Docker commands:

> When \`setup_remote_docker\` executes, any Docker-related commands you use will be executed locally on the virtual machine used to spin up containers for your job.

In simple terms, we need to run this before any other Docker commands.

Next we will \`checkout\` our code from version control.

Our first \`docker\` orb command, \`docker/check\`, is a sanity check to make sure everything is working as it should with our Docker setup. If there is a problem, this is where it *should* be caught.

Next, we will build and push our Docker image to the DockerHub registry. Since we have already set our login credentials as env vars, the only argument we will need to provide is for the \`image\` property. This will be our desired identifier for our image in the registry.

Next we have our first manual \`run\` command. Here we will be making use of the 1Password CLI to *edit* the item \`latest_placeholder\`, using the CircleCi env var \`CIRCLE_SHA1\`. Note that since this is an edit operation, the item and field must exist in your 1Password service account vault before this pipeline is run.

Lastly, we will trigger another pipeline to run the successful completion of this one. One of the many cool things about CircleCi is that each pipeline is attached to a handy REST api, which we are triggering here with a simple POST request with \`curl\`. As you can see, authentication is handled via the header \`Circle-Token\`, to which we will feed our token from, you guessed it, 1Password! These tokens are associated at the account level and can be created [here](https://app.circleci.com/settings/user/tokens).

## Refactoring Infra

When last we left our infrastructure repo, we had created a folder called \`infra\` and had been using a functional pattern to manage our resources.

Each group of resources had a file like so:
\`\`\`typescript
// imports

export const initResourceGroupOne = () => {
	const resourceOne = // pulumi code
	const resourceTwo = // pulumi code

    return {resourceOne, resourceTwo}
}
\`\`\`
These were then exported from \`index.ts\` in the \`infra\` folder:
\`\`\`typescript
export {initResourceGroupOne} from "./resourceGroupOne"
export {initResourceGroupTwo} from "./resourceGroupTwo"
\`\`\`
And finally to the base level \`index.ts\` file, which is the expected entry point for a TypeScript Pulumi program, like this:

\`\`\`typescript
import {initResourceGroupOne, initResourceGroupTwo} from "./infra"

const resourceOne = initResourceGroupOne()
const resourceTwo = initResourceGroupTwo()

export default {resourceOne, resourceTwo}
\`\`\`
Now, this pattern works pretty well. I like this pattern and I could keep doing it and everything would be fine. However, I decided I liked another pattern better.

So instead of a functional pattern as before, we will be using a simpler file level pattern like so:
\`\`\`typescript
// imports

const resourceOne = // pulumi code
const resourceTwo = // pulumi code

export default {resourceOne, resourceTwo}
\`\`\`
exported from the \`infra/index.ts\` as:
\`\`\`typescript
export {default as resourceGroupOne} from "./resourceGroupOne"
export {default as resourceGroupTwo} from "./resourceGroupTwo"
\`\`\`
and finally to the entry point \`index.ts\`:

\`\`\`typescript
import {resourceGroupOne, resourceGroupTwo} from "./infra"

export default {resourceGroupOne, resourceGroupTwo}
\`\`\`

I prefer this to the previous pattern as it moves *all* of the implementation logic to the infra file itself and uses each \`index.ts\` file solely for importing and exporting. This means a little bit more boilerplate code, but I think it gains a nice clarity and I like knowing that the business logic for each service can be grouped exactly as I would like.

I enjoy this kind of iterative approach to writing software. I had an idea, and it worked well, so I implemented it. Later, I had a better idea, so I implemented that and it worked even better. It is important to realize your tools, patterns and processes are not set in stone, but are in fact fluid and ever changing. As you progress on any software project, you will learn more about what the specific needs are for your project and also what your preferences for it are. I would encourage you to be open to the possibility of change and not let your thinking become ossified.

## Setting up our Web Service

Now that we have our web service set up and containerized, we need to change our existing infrastructure setup to deploy it. These changes will be done on the infra repo we created in our previous article.

### Verify ownership and add domain records

Before we can setup our web service on a custom domain, there are a few things we must do regarding the domain itself. As far as I know, this needs to be done manually, and cannot be done via IaC. If someone does know of an automated way to do this though, I would love to know about it! As of this writing, Google is actively in the process of selling of their domain registrar service. I am using SquareSpace for domains, but the general steps described should map onto any domain registration service.

First, we will be working in Google Search Console (GSC). This is a service provided by Google to monitor things like SEO, Web Vitals, performance etc. We need to inform GSC that you are indeed the owner of the site you say you are. Go to the [GSC Ownership Verification page](https://search.google.com/search-console/ownership) and click on the Search Property dropdown in the upper left corner, and navigate to the Add Property option.

![Google Search Console](/google_search_console.png)

A popup will appear with two options: Domain and URL prefix. We are going to be adding the entire domain. Enter the domain that you have procured for your site to live on, minus any prefixes. So, for example, if you purchased myraddomain.com and planned to host your service on www.myraddomain.com you would enter simply myraddomain.com. Later on we will be pointing the www (or other) subdomain to the container hosting our service. GSC will attempt to verify the console. It should fail in its first attempt.

![GSC Domains](/domains.png)

A TXT record will be presented to you to add to the DNS records in your domain registrar. This is where things will be varied. Your registrar should have documentation detailing how to add this to your sites records. Be aware that the ONLY purpose of this record is to prove ownership to GSC.

Once you have added that record, navigate back to the verification page and try to verify it again. In a couple of seconds, it should successfully do so and you will be set.

Before you close the DNS records page on your registrar, we will go ahead and add a CNAME record for the subdomain you wish to host your container on. We seldom think of it, but www is in fact a *subdomain*. Thus we will be setting up a record to point the subdomain to our CloudRun service. The www prefix is a convention, but it is not necessary to have a valid url. Using our previous example, if I wished to host my service on www.myraddomain.com, I would enter a Host field value (the field detailing subdomains may be titled differently) of \`www\`, a Type value of \`CNAME\` and a Data field value of \`ghs.googlehosted.com\`. This of course, will not map to a service at this time, but will be mapped to in our IaC later.

Just one more thing to do before we get to the code itself. Since we are using this with a service account running on CircleCi, we need to authorize that service account to make changes on this domain. In the [Users and Permissions page of GSC](https://search.google.com/search-console/users)  click on the Add User button and enter the email account associated with your service account. You will find this in the \`client_email\` field of the service account credentials you should have stored in 1Password, and also locally if you have run the local \`parseCreds\` script.

And that is it! Now to our IaC.

### Secrets

To start with, I wanted a way to centralize my secrets that would work whether I was working locally or in a CircleCi environment. I settled on having a file called \`vars.ts\` at the base level. I set it up like so:

\`\`\`typescript
interface GoogleCredentialSecrets {
    type: string
    project_id: string
    private_key_id: string
    private_key: string
    client_email: string
    client_id: string
    auth_uri: string
    token_uri: string
    auth_provider_x509_cert_url: string
    client_x509_cert_url: string
    universe_domain: string
}

const isCircleCI = process.env.CIRCLECI && process.env.CIRCLECI === "true"

const googleSecrets: GoogleCredentialSecrets = process.env.GOOGLE_CREDENTIALS ? 
    JSON.parse(process.env.GOOGLE_CREDENTIALS) : require("./service-account-secrets.json")

// double check that the most recent placeholder sha matches with 1password when running pulumi locally
const latestPlaceholderSha = isCircleCI && process.env.LATEST_PLACEHOLDER_SHA ? 
    process.env.LATEST_PLACEHOLDER_SHA : require("./placeholder-secrets.json").sha

export default {
    domain: "timothymalstead.com",
    latestPlaceholderSha,
    location: "us-central1",
    project: googleSecrets.project_id,
    serviceAccountMember: \`serviceAccount:\${googleSecrets.client_email}\`,
}
\`\`\`
Recall that \`placeholder-secrets.json\` is the file made from running the \`parseCreds\` script in our \`package.json\` file. Create a new file called \`service-account-secrets.json\` at the root level of the repo and paste in the following, where \`{{PLACEHOLDER_SHA}}\` is the sha of the placeholder repo you wish to run.

\`\`\`json
{
    "sha" : "{{PLACEHOLDER_SHA}}"
}
\`\`\`
 
Note that since both of these files end with \`secrets\` they will not be tracked by version control.

### Infra folder

Here I will detail the changes to files/new files created for this step of the process.

Start with \`storage.ts\`

\`\`\`typescript
import * as gcp from "@pulumi/gcp"

// I do not love that I do not have the option of camel case for the bucket name, but here we are
const publicBucket = new gcp.storage.Bucket("public-site-storage", {
    location: "US", 
    uniformBucketLevelAccess: false
})

const {name: bucket} = publicBucket

const publicBucketIamBinding = new gcp.storage.BucketIAMBinding("publicBucketIamBinding", {
    bucket,
    role: "roles/storage.objectViewer",
    members: ["allUsers"],
})
    
const datePulumiLastModified = new gcp.storage.BucketObject("datePulumiLastModified", {
    bucket,
    name: "datePulumiLastModified.json",
    content: JSON.stringify({datePulumiLastModified: Date.now()}),
})

export default {
    publicBucket, 
    publicBucketIamBinding, 
    datePulumiLastModified
}
\`\`\`
Just cosmetic changes here, done according to the pattern established above in the section regarding refactoring.

\`serviceAccount.ts\`, which was formerly \`service.ts\`

\`\`\`typescript
import * as gcp from "@pulumi/gcp"
import vars from "../vars"

const pulumiCircleCiService = new gcp.serviceaccount.Account("pulumiCircleCiService", {
    accountId: "pulumi-circle-ci-service",
    displayName: "pulumiCircleCiService",
})

const pulumiCircleCiServiceAccountKey = new gcp.serviceaccount.Key("pulumiCircleCiServiceAccountKey", {
    serviceAccountId: pulumiCircleCiService.name,
})

const serviceAccountRoles =[
    {pulumiName: "cloudRunRole", role: "roles/run.admin"},
    {pulumiName: "serviceAccountUser", role: "roles/iam.serviceAccountUser"},
]

const pulumiCircleCiServiceAccountRoles = serviceAccountRoles.reduce((roleObj, {pulumiName, role}) => {
    const roleToAdd = new gcp.projects.IAMMember(pulumiName, {
        member: vars.serviceAccountMember,
        project: vars.project, 
        role
    })
    roleObj[pulumiName] = roleToAdd

    return roleObj
}, {} as Record<string, gcp.projects.IAMMember>)

export default {
    pulumiCircleCiService, 
    pulumiCircleCiServiceAccountKey,
    pulumiCircleCiServiceAccountRoles
}
\`\`\`

Here the change is that we need to add a few new service account roles to be able to set up our CloudRun service. I added them in an array of objects to make it easy in case I need to add more in the future.

The first of our two new files, \`apis.ts\`.

\`\`\`typescript
import * as gcp from "@pulumi/gcp"
import vars from "../vars"

const resourceManager = new gcp.projects.Service("resourceManager", {
    disableDependentServices: false,
    disableOnDestroy: false,
    project: vars.project,
    service: "cloudresourcemanager.googleapis.com",
})

export default {
    resourceManager
}
\`\`\`
This activates a Google Cloud api that needs to be active for you to activate a CloudRun service.

After you have changed/made these three files, I would recommend that you do a \`pulumi up\` before making the CloudRun service file itself.

Did you do that? Okay, let us move on to the real star of this article, \`cloudRun.ts\`

\`\`\`typescript
import * as gcp from "@pulumi/gcp"
import vars from "../vars"

const {location} = vars
const metadata = {namespace: vars.project}

const mainSiteService = new gcp.cloudrun.Service("mainPersonalSite", {
    name: "main-personal-site",
    location,
    metadata,
    template: {
        spec: {
            containers: [{
                image: \`docker.io/timmalstead/personal-site-placeholder:\${vars.latestPlaceholderSha}\`,
            }],
        },
    },
    traffics: [{
        latestRevision: true,
        percent: 100,
    }],
})

const noAuthIAMPolicy = gcp.organizations.getIAMPolicy({
    bindings: [{
        role: "roles/run.invoker",
        members: ["allUsers"],
    }],
})

const mainSiteNoAuthPolicy = new gcp.cloudrun.IamPolicy("mainSiteNoAuthPolicy", {
    location: mainSiteService.location,
    project: mainSiteService.project,
    service: mainSiteService.name,
    policyData: noAuthIAMPolicy.then(noauthIAMPolicy => noauthIAMPolicy.policyData),
})

const mainSiteDomainMapping = new gcp.cloudrun.DomainMapping("mainSiteDomainMapping", {
    location,
    metadata,
    spec: {
        routeName: mainSiteService.name,
    },
    name: \`www.\${vars.domain}\`,
})

export default {
    mainSiteService, 
    mainSiteNoAuthPolicy, 
    mainSiteDomainMapping
}
\`\`\`

First of all, we have a few variables that will be used in multiple places, so we’ll unpack those.

For the service itself. For the container, we point it at the DockerHub address we published our container to and we append the \`latestPlaceholderSha\` variable we saved to our 1Password service account. If you’re wondering how that is getting from that account to our Vars, we will cover that in just a little bit.

The next two resources we create will allow our service to be publicly accessible. As a default, a service created for CloudRun is private. First we fetch a policy that allows all users, meaning anyone on the internet, to assume the \`run.invoker\` role. This is done when a user points their browser at the subdomain we are mapping the container to. After we have fetched that organizational policy, we will apply it to our created web service.

Lastly, we will map our service. This is the companion to the CNAME record we created at our domain registrar earlier. This will tell CloudRun which container to point to when the \`www\` subdomain is called. This is not currently available in all GCP regions, but it is available in \`us-Central1\`, which is why I am hosting this project in that region. Technically this is an experimental feature. However, it has been such for several years now so I am good with including it in production.

### CircleCI

There is only a small change needed for our Ci file. We will simply be exporting \`LATEST_PLACEHOLDER_SHA\` as an env var, allowing us to access it in our Pulmi setup.

\`\`\`yaml
version: 2.1
orbs:
  onepassword: onepassword/secrets@1.0.0
  pulumi: pulumi/pulumi@2.1.0
jobs:
  setup:
    docker:
      - image: node:20
    resource_class: small
    steps:
      - checkout
      - run: 
          name: Install dependencies
          command: npm ci --only=production
      - persist_to_workspace:
          root: ~/project
          paths:
            - .
  build_infra:
    docker:
      - image: node:20
    resource_class: small
    steps:
      - attach_workspace:
          at: ~/project
      - onepassword/install-cli:
          version: 2.18.0
      - onepassword/export:
          var-name: GOOGLE_CREDENTIALS
          secret-reference: op://personal-site-gcp/pulumiCircleCiService/key
      - onepassword/export:
          var-name: LATEST_PLACEHOLDER_SHA
          secret-reference: op://personal-site-gcp/latest_placeholder/sha
      - pulumi/login:
          access-token: $(op read op://personal-site-gcp/pulumi/circle_ci_token)
      - pulumi/update:
          stack: timmalstead/personal-site-gcp-infra/prod
workflows:
  build:
    jobs:
      - setup
      - build_infra:
          requires:
            - setup
          context:
            - personal_site
\`\`\`

After you’ve made all of those changes, go ahead and commit and push up to GitHub. After your pipeline runs, you should be able to see your new service at the \`www\` subdomain of the domain you registered! In my experience this should take less than an hour to be active.

## Final Thoughts

Let’s review what we’ve done. We created a simple server to deliver a static piece of HTML, containerized it and placed that container on a public repository in the DockerHub registry. We then altered our existing infrastructure repo to publish that container to our subdomain. It takes a bit of doing, but I believe that this setup can make CI an easy affair and allow you to quickly iterate on your service as needed. And since it is the fully managed CloudRun service, you won’t have to worry about scaling or other day to day site infra concerns.

Next time: [App up!](/blog/over-engineer-your-site-part-5)
`,
                        },
                        {
                            name: "LastModified",
                            lastModifiedDate: 1736987829980,
                        },
                    ],
                },
            },
        },
        "over-engineer-your-site-part-5": {
            content: {
                data: {
                    metadata: {
                        title: "How to Over-Engineer Your Personal Site: Part Five",
                        description:
                            "Fifth entry in a series about how I redid my personal website, focusing on working with Next.js",
                        openGraph: {
                            description:
                                "Fifth entry in a series about how I redid my personal website, focusing on working with Next.js",
                            locale: "en_US",
                            title: "How to Over-Engineer Your Personal Site: Part Five",
                            type: "website",
                            url: "https://www.timothymalstead.com/blog/over-engineer-your-site-part-5",
                        },
                    },
                    components: [
                        {
                            name: "Markdown",
                            text: `
# How to Over-Engineer Your Personal Site
## Part Five: An Appetizing App

Now that we have our infra for Cloud Run set up, we will go ahead and start on the app for our homepage!
`,
                        },
                        {
                            name: "Markdown",
                            useReadPercentage: false,
                            text: `
## Getting Familiar with Next.js

We are going to be using [NextJS](https://nextjs.org/) for our web framework. Why? Because it’s a good all in one package for a full stack web application. I’m going to try to do as much as I can with it. You may recall in Part two of this series, I stated that might be using Module Federation in this effort. I have changed my mind about that. I may still do that if it presents itself as a good solution to a problem, but I don’t think I’ll be working toward that just to work toward that.

If you’ve not worked with Next.js before, I recommend building their starter [dashboard app](https://nextjs.org/learn/dashboard-app/getting-started) before you do anything else. It’s not overly involved and will give you a good overview of the features available with the framework, and how it differentiates from only using React.

I’m not going to go over each piece of code in this article, that would make this article far too long! Instead I’ll go over highlights and discuss why I’ve made some of the decisions I have. If you do wish to examine the code in depth, you can [find it here](https://github.com/timmalstead/personal-site-next-js).

## Setting things up

I’m a big fan of a managed setup, and Next has a very easy one. Simply type \`npx create-next-app@latest\` into your terminal and you are off to the races. I’m interested in using the latest tools that Next has to offer, so I will be using the app router setup.

What I’m *not* as interested in is using Tailwind. Vanilla CSS is pretty good these days, and I have no great desire to abstract it behind utility classes.

## Rolling my own CSS

Many people like to use CSS frameworks for their projects. Whether it is a CSS in JS solution like Styled Components, a pre-processor like SASS/LESS or a utility class based system like the aforementioned Tailwind. I will not presume to tell other people what is best for their project, but I will present a few of my own arguments for why I feel using plain old CSS is a better option then it has been in a long time.

* Less overhead / A clearer understanding of specificity
* Namespacing with nested selectors
* CSS modules

Let’s go over these one by one.

### Less overhead / A clearer understanding of styling

Abstraction is a powerful tool in computing, and an important one. If we have abstractions that we can depend on, it can free up our time, resources and thinking for what we really wish to focus on. The framework we have chosen is an abstraction over the operations of the browser and server, and our interactions with the browser are an abstraction over various network functions/script executions etc. I’m not a systems person and I don’t know that much about low level operations. I depend on abstractions to be able to do my work, as does anyone who works with code.

And I get it, CSS is a pain. It’s a finicky, declarative, system with a million little gotchas. We don’t want to deal with it, so we’ve build tools around it, such as CSS in JS and SASS. These are good tools, but they’re still trying to fit a square peg in a round hole.

But here’s the rub: You may not like to hear it, but it’s *still* important for you to understand CSS and how the browser uses it. Frameworks make that hard to do. As with anything, the best way to learn about CSS is do it. That means you should write a lot of it. An entire design systems worth. Starting out global, figuring out what all parts of your program will need, breaking down repeating sets of rules into components and, most fundamentally, learning to take advantage of the cascade and specificity.

### Namespacing with nested selectors

This is a [fairly recent change to the CSS spec](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting/Using_CSS_nesting). Where before you had to have individual rules that would often become repetitive and hard to read, now a CSS ruleset can contain *other* CSS rulesets. This is a convention that has proven so popular in preprocessors and CSS in JS frameworks that it has been adapted into the official spec.

Let’s look at an example.

\`\`\`css
li.color-switcher {
    input[type="checkbox"] {
        appearance: none;
        background-color: var(--text-color);
        padding: 0 0.5rem;
        border-radius: 2rem;
        cursor: pointer;
        font-size: 1.5rem;

        &::before,
        &::after {
            color: var(--background-color);
            transition: all var(--transition-duration);
        }

        &::before {
            content: "☾ ";
            opacity: 0.25;
        }

        &::after {
            content: "☀";
            opacity: 1;
        }

        &:checked {
            &::before {
                opacity: 1;
            }

            &::after {
                opacity: 0.25;
            }
        }
    }
}
\`\`\`
Here I have a component to switch between dark and light color schemes. It is a checkbox input where I have removed the default styles and made conditional styling changes using pseudo-elements and pseudo-classes.

Let’s take a look at what this would look like *without* using nested CSS selectors.

\`\`\`css
li.color-switcher > input[type="checkbox"] {
    appearance: none;
    background-color: var(--text-color);
    padding: 0 0.5rem;
    border-radius: 2rem;
    cursor: pointer;
    font-size: 1.5rem;
}

li.color-switcher > input[type="checkbox"]::before,
li.color-switcher > input[type="checkbox"]::after {
    color: var(--background-color);
    transition: all var(--transition-duration);
}

li.color-switcher > input[type="checkbox"]::before {
    content: "☾ ";
    opacity: 0.25;
}
li.color-switcher > input[type="checkbox"]::after {
    content: "☀";
    opacity: 1;
}

li.color-switcher > input[type="checkbox"]:checked::before {
    opacity: 1;
}

li.color-switcher > input[type="checkbox"]:checked::after {
    opacity: 0.25;
}
\`\`\`
Now we can dramatically reduce the amount of repetitive styling code we write with no need for an additional styling tool. I can’t speak for you, but I think that’s an excellent argument in favor of sticking with plain ol’ css.

### CSS modules

What are CSS modules? The [documentation](https://github.com/css-modules/css-modules) defines them as "a CSS file where all class names and animation names are scoped locally by default". In simple programmatic terms they are CSS rulesets delivered in plain JavaScript objects. This makes them ideal for conditional styles.

For example, here is part of a CSS module I wrote for my header on this project

\`\`\`css
.show,
.hide {
	position: sticky;
	transition: top  var(--transition-duration);
}

.show {
	top: 0;
}

.hide {
	top: calc(-2  *  var(--header-height));
}
\`\`\`
When imported into a \`js\`, \`jsx\`, or \`tsx\` file, these will read as an object like this.
\`\`\`js
  {
	  show: ’ClientHeader_show__XOZvP’,
	  hide: ’ClientHeader_hide__Oqcat’,
  }
\`\`\`
As you can see, the class name we defined in our module maps onto a unique class name that will not be repeated throughout the project. Thus we see one of the great benefits of CSS modules: *they don’t produce rule collisions*!

## Design decisions

I will be keeping this site austere and clean as much as possible. I want an emphasis on warm neutrals and text, with images interspersed where necessary.

I will be using [middleware](https://nextjs.org/docs/app/building-your-application/routing/middleware) to set a \`X-Pagename\` to help with fetching data and static content. I will also use middleware to provide authorization for my publishing API routes.

I’ll be using Google’s NoSQL database offering [Firestore](https://firebase.google.com/docs/firestore) to handle persistent data and create a simple component based CMS. I’ve always wanted to try rolling my own CMS, and I’m looking forward to the challenge.

I’ll be using \`react-markdown\` to translate the markdown held on Firestore into the final SSR html. I will be using this as a server side only package, and it will not be used on the client, thus making the bundles sent a great deal smaller.

## Testing

I have an idea for this site that may not work out very well, but I’m gonna try it anyway: I’m gonna see if I can *only* do e2e testing, instead of using unit testing as well. I’ve written a lot of Jest tests and used JSDOM quite a bit as well, but even the best UI unit test is still testing on a simulation of a browser environment, and the idea of fully testing in the same environment that my code will execute in is very satisfying to me.

I may need to change this, but to start, at least, I think it will be a fun challenge.

## User settings

I want to give the user some settings they they can control, so they can get the experience they want on my site. I’ve overdone this part before, giving multiple selectable color themes and page setups. For this I’m going to keep it much simpler, giving simple usability controls such as a dark and light color scheme and the ability to turn off motion for users who do not do well with it.

I will endeavor to make things work as well as I can with the browser’s native zoom functions. I believe that if the browser already does something well, like a zooming function, there’s no need to try and reinvent that. Rather it is better to write code that will work well with that native behavior.

These settings will be persistent via the use of small cookies. Using cookies allows me to apply these settings on the server and avoids a flash of mismatched styling upon hydration.
 
## Blog

If you’re reading this, that probably means I’ve got a blog set up. For the start it will be a pretty simple affair, mostly the markdown based components I detailed above. As I go further into the project, I may layer some more functionality into it. As always, I will try to do as much as I can with my own code and avoid third party packages unless they offer a great deal of benefit and are genuinely something I don’t feel I could do myself.

Of course, I’m sure there any number of packages and services I could quickly use to get a blog up quickly and easily. But where’s the fun in that?

## Final Thoughts

Whew! It’s been a long journey but I think we’re just about ready to launch the first iteration of this over-engineered site. I’ll likely go into further detail about many of the features of my site, the problems I’ve run into and how I’ve solved them.

I like the open web, and I like working with web technologies. For me, the web remains the most interesting and useful part of the internet. I hope you’ve enjoyed reading this series as much as I have enjoyed writing it. Keep making cool things, keep learning and keep having fun! 🖖
`,
                        },
                        {
                            name: "LastModified",
                            lastModifiedDate: 1736987829980,
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

## Code

Feel free to examine the [GitHub repo](https://github.com/timmalstead/personal-site-next-js) for this site.

## Data Policy

It is the policy of myself and this site to respect your privacy and data.

In this spirit, I only collect basic information about your visit to this site, such as the pages you visit and the time you spend on each page.

I do not share this information with any third parties, and I do not use it for any purpose other than to improve the content and performance of this site.

To gather this information, I *solely* use the default implementation of Google Analytics.

__This implementation does not collect any personally identifiable information.__

For more information about the specific information collected by the default implementation of Google Analytics, please see this [Google Support Article](https://support.google.com/analytics/answer/11593727?hl=en).

If there are any changes in my data collection or use policies, I will update this page to reflect those changes.

## Cookies and Headers

I set a few custom headers and cookies to make the use of this site more smooth and enjoyable. Note that *none* of the information listed below is shared with third parties, nor persisted beyond run time and the system of the user.

### Browser

There are a few features on this site that rely on browser specific implementations. Thus I keep track of what browser is being used by using a response header called \`x-browser\`.

### Pagename

I set a response header called \`x-pagename\` to keep track of what page is currently being displayed. This is used as a source of truth for fetching data.

### Color Theme

A cookie called \`colorMode\` is set to persist your preferred color scheme for this site. This can be adjusted in the settings at the lower right of the page.

Note that this can also be set by the [Sec-CH-Prefers-Color-Scheme header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Color-Scheme) as a fallback if the cookie is not present. However, as of this writing, this header is not in wide use.

The color scheme should also respond to changes in the color scheme of the device you are using.

If none of these are present to set the scheme, it will default to \`dark\`. 

The possible values of this cookie are \`dark\` and \`light\`.

### Motion Reduction

This page makes use of animations and transitions. If you do not wish to see this behavior, it can be adjusted in the user settings at the bottom right of the page.

Your preference is set in a cookie called \`reducedMotion\`.

Similar to the color scheme, this can also be set by the [Sec-CH-Prefers-Reduced-Motion](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Sec-CH-Prefers-Reduced-Motion) header if the cookie is not present. However, as of this writing, this header is not in wide use.

If neither of these are present to set your motion preference, it will default to \`no-preference\`. 

The possible values of this cookie are \`no-preference\` and \`reduce\`.

### User Settings

I make use of a cookie called \`userSettings\` to persist if you have the user settings open or closed. This can be changed by clicking on the user settings tab in the lower right of the page.

The default value of this cookie is \`closed\`.

The possible values of this cookie are \`closed\` and \`open\`.
`,
                },
                {
                    name: "LastModified",
                    lastModifiedDate: 1737163543032,
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
                        {
                            name: "Link",
                            text: "timmalstead@gmail.com",
                            href: "mailto:timmalstead@gmail.com",
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
            // TODO: this will only delete up to the content key, so I will see if I can improve it later
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
