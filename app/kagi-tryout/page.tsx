import type { Metadata } from "next"
import {
    Attribution,
    Heading,
    LastModified,
    Markdown,
} from "@components/server"
import { fetchRecipeWidget } from "./fetchRecipeWidget"
import "./kagi-tryout-styles.css"

export const metadata: Metadata = {
    title: "Kagi Tryout",
    description: "A tryout done for Kagi by Timothy Malstead",
    alternates: {
        canonical: "https://www.timothymalstead.com/kagi-tryout",
    },
    openGraph: {
        description: "A tryout done for Kagi by Timothy Malstead",
        locale: "en_US",
        title: "Kagi Tryout",
        type: "website",
        url: "https://www.timothymalstead.com/kagi-tryout",
    },
}

// go back and highlight code
const KagiTryout = async () => {
    const {
        HtmlCode,
        CssCode,
        RecipeStyles,
        RecipeShortChecklist,
        RecipeFullChecklist,
        RecipeParagraph,
    } = await fetchRecipeWidget()

    return (
        <main className="kagi-tryout-styles">
            <RecipeStyles />
            <Heading level="h1">Kagi FE Demo Project</Heading>
            <Attribution readingTime={10} />
            <Markdown>
                {`
Hello, my name is Timothy Malstead and I am very pleased to be welcoming you to my tryout project for Kagi.

Kagi is a company that I greatly admire and whose philosophy aligns with my own. We both believe in the power of the open web and the importance of unfettered access to it via *open and equitable* channels that center humans at all stages of the process.

To that end, I am seeking the position of Software Developer (Web & Marketing Systems), and this page will serve to illustrate how I tackled the demo project that was given to me.

## Task 1 - HTML Recipes

[See the code for the Recipe Widget on GitHub (new tab will open)](https://github.com/timmalstead/kagi-tryout/tree/main/recipe-widget)

I want to note that the code shown below is the *exact* code, fetched from the GitHub repo shown above. Some minor formatting changes were made to make it easier to fit into the flow of this page, for example the CSS was put into a <style> tag, but no changes were to the functionality of these components. The exact code with which I fetched these [can be seen here](https://github.com/timmalstead/personal-site-next-js/blob/main/app/kagi-tryout/fetchRecipeWidget.tsx).

The instruction given for the first task is this:

> * Make a recipe widget as shown in the image.
> * Clicking "Show more" should expand the content of the widget.
> * The text should change to "Show less".
> * Clicking "Show less" should collapse the content.
> * "Show more" should only be visible if there are more than 10 ingredients.
> * There is no need to add, edit, or delete ingredients in this widget. The idea is to make "Show more/Show less" functionality WITHOUT JavaScript.
> * Make 2 examples, one with checkboxes like shown in the image, and another with just a paragraph of text. For the second example, there should be >=15 lines of text. 10 lines of text should be visible when collapsed and when expanded the rest should show up.
> * No JavaScript at all for this one.

When I first read that I shouted out loud for joy. I'm always an advocate for using HTML and CSS as much as possible and for pushing hard to only use JavaScript when needed. This was going to be a fun challenge and a chance to write the kind of code that I don't always get to.

### Components

I created three individual components to illustrate the three requested states of the recipe widget:

* A version with checkboxes with 10 ingredients or fewer, where the "Show more" text *is not meant* to be seen.
* A version with checkboxes with 11 ingredients or more, where the "Show more" and "Show less" text *are both meant* to be seen.
* A version without checkboxes but with a paragraph of information with more than 10 lines.

Before we get to the components themseleves, I would suggest you reload this page without the use of JavaScript, to make sure that I am being honest when I say that I am only using HTML and CSS for these components. When JavaScript is disabled on this site, you will not see the small settings flyout on the lower right of the screen.

Let's look at the version with checkboxes and 10 or fewer ingredients.
`}
            </Markdown>
            <RecipeShortChecklist />
            <Markdown>
                {`
Here we have a pretty standard checklist. Click on any of the checkboxes or their associated labels, and the checkbox will be checked. Click again and it will be unchecked.

Let's see how things look when we have a longer list of ingredients.
`}
            </Markdown>
            <RecipeFullChecklist />
            <Markdown>
                {`
Ah okay, now things are getting a bit more interesting. The checkbox functionality is the same, but now we have a small block of text at the bottom of the widget that will open and close the widget. When the widget is open, the text will change from "Show more" to "Show less". Fun!

Lastly, let's take a look at widget when it is used with a paragraph of text instead of checkboxes.
`}
            </Markdown>
            <RecipeParagraph />
            <Markdown>
                {`
Here we are seeing 10 lines of text with same open/closed toggle from the previous component. When clicked, this component will open up to display the rest of the text in the paragraph. Click again and it will go back to only displaying 10 lines of text.

That's it for the components. I believe they implement the directions quite well.

### Code

To start, let's look at the HTML:
`}
            </Markdown>
            <HtmlCode />
            <Markdown>
                {`
I think this code is pretty strightforward, but let's go through it. We start with !DOCTYPE and <html> tags, and some <head> and <body> info after that. We have three <div> tags with the class of "recipe-widget" after that. These are the components shown above. 

From the start I knew I wanted to use a <details> tag for this. This is because it gives us access to the very useful [open] attribute. Along with the <summary> tag to display information, we can predicate styling on the closed state (which is the default) and the [open] state as well.

One thing you're probably notice from the start is that I am only using one class name for this widget at the top level. This is intentional. I am not rigidly dogmatic about the use of classes and feel that as long as something is properly namespaced, in this instance with the "div.recipe-class" selector, that it is often easier to target loosely inside that namespace. This allows me to write simpler and more declarative CSS, which is always a goal. The relatively recent addition of [nesting to the CSS spec](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting) makes this very simple to do. Of course, I've often worked to spec for specific naming systems, but if left to my own devices I will usually structure things like this.

Now let's move on to the CSS code:
`}
            </Markdown>
            <CssCode />
            <Markdown>
                {`
First we have a simple reset of the margin and padding properties for all elements. I like to do this to make things a bit easier to work with, as some elements have default spacing properties I don't really want to deal with.

After that we get to the main part of the CSS, the definition for "div.recipe-widget".

The first thing I do is create some locally scoped spacing and color variables. For something like this, I like to scope variables inside the component so I don't run the rist of interacting with any other variables in the global space.

Next I set the basic styling for the enclosing div tag. This includes things like fonts, colors, spacing and border. I also set the styling for the h2 tag.

The next block, details, contains everything else for this CSS file. It contains a very few shared rules between the checkbox and paragraph implementations for this component. The most important of these is setting 'pointer-events' to 'none'. The default behavior for a <details> tag is that any click inside the tag will result in the shifting of the open or closed state. Since I *only* want to have the "Show more" and "Show less" text open and close this component, I will disable 'pointer-events' in the details block and opt the behavior back in for specific descendent elements.

I also hide the 'list-style' property so I will not see the default triangle cursor that is usually seen on a <details> tag.

The next two blocks differentiate the styling applied to the checkbox version and the paragraph version. This is done by use of the [:has pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has). We have one block of styling for when the <details> tag has an <ul> tag for a grandchild, and one for when it has a <p> tag as its grandchild.

In the checkbox styling, I define the needed styling for the <ul>, <li>, <label> and <input> tags. I also create an \`::after\` pseudo element for the \`<ul>\` tag but I do not yet set it to be active. I only want that to be active when there are 11 or more child \`<li>\` elments of the \`<ul>\` tag. I will set that condition next.

To create the condition I again use the \`:has\` pseudo-class, this time in combination with the [:nth-child pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) with an argument of 11. With this I am saying that I *only* want the enclosed styles to be applied when there are 11 or more child \`<li>\` elments of the \`<ul>\` tag. The first style I apply in this block is to make all child \`<li>\` elements *after* the 11th to not display and I set the \`::after\` pseudo-class to be visible and to accept pointer events.

Since clicking the "Open more" text is the only thing that will set the the \`[open]\` attribute of the \`<details>\` element, the rest of this styling can be done in the \`:open\` pseudo-class. Note that this could also be done by targeting the open attribute directly instead of the pseudo class. I just think that this is a bit cleaner.

In the open styling we need to set all of the \`<list>\` elements after the 11th to be visible by again applying styling with \`:nth-child\`. Here you will notice use of an \`!important\` directive on the \`display\` rule. As a general thing I try to avoid these, but for here where this declaration cannot win on specificity, I think it's a fine use of it. I greatly enjoy using this technique to hide and display elements, because I do not have to manually manage the size of the component or do too much math.

We also need to change the content of the \`ul::after\` to "Show less".

Simple right?

The paragraph implementation uses a similar techniques, but instead of counting the child elements, we count the number of lines in the \`<p>\` element using the line height unit of measurement, \`lh\`. After the 10th element we hide the remaining lines and show them when the state is changed to \`open\`.

## Task 2 - JavaScript optimization

`}
            </Markdown>
            <LastModified lastModifiedDate={1755992867538} />
        </main>
    )
}

export default KagiTryout
