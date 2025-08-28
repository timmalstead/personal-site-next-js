import type { Metadata } from "next"
import {
    Attribution,
    Heading,
    LastModified,
    Markdown,
} from "@components/server"
import { fetchKagiTryoutFiles } from "./fetchKagiTryoutFiles"
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

const KagiTryout = async () => {
    const {
        HtmlCode,
        CssCode,
        RecipeStyles,
        RecipeShortChecklist,
        RecipeFullChecklist,
        RecipeParagraph,
        JsToLoad,
        Benchmark,
        CourtOne,
        CourtTwo,
        CourtThree,
    } = await fetchKagiTryoutFiles()

    return (
        <main className="kagi-tryout-styles">
            <RecipeStyles />
            <JsToLoad />
            <Heading level="h1">Kagi FE Demo Project</Heading>
            <Attribution readingTime={23} />
            <Markdown>
                {`
Hello, my name is Timothy Malstead and I am very pleased to welcome you to my tryout project for Kagi.

Kagi is a company that I greatly admire and whose philosophy aligns with my own. We both believe in the power of the open web and the importance of unfettered access to it via open and equitable channels that center humans at all stages of the process.

To that end, I am seeking the position of Software Developer (Web & Marketing Systems), and this page will serve to illustrate how I tackled the demo project that was given to me.

## Task 1 - HTML Recipes

[See the code for the Recipe Widget on GitHub (new tab will open)](https://github.com/timmalstead/kagi-tryout/tree/main).

If you wish to see this code running in isolation, you can [find it on GitHub pages (new tab will open)](https://timmalstead.github.io/kagi-tryout/).

I want to note that the code shown below is the *exact* code, fetched from the GitHub repo shown above. Some minor formatting changes were made to make it easier to fit into the flow of this page, for example the CSS was put into a <style> tag, but no changes were made to the functionality of these components. The code I used to fetch the HTML and CSS [can be seen here](https://github.com/timmalstead/personal-site-next-js/blob/main/app/kagi-tryout/fetchRecipeWidget.tsx).


The instruction given for the first task is this:

> * Make a recipe widget as shown in the image.
> * Clicking "Show more" should expand the content of the widget.
> * The text should change to "Show less".
> * Clicking "Show less" should collapse the content.
> * "Show more" should only be visible if there are more than 10 ingredients.
> * There is no need to add, edit, or delete ingredients in this widget. The idea is to make "Show more/Show less" functionality WITHOUT JavaScript.
> * Make 2 examples, one with checkboxes like shown in the image, and another with just a paragraph of text. For the second example, there should be >=15 lines of text. 10 lines of text should be visible when collapsed and when expanded the rest should show up.
> * No JavaScript at all for this one.

When I first read that I shouted out loud for joy. I'm always an advocate for using HTML and CSS as much as possible and for only using JavaScript when needed. This was going to be a fun challenge and a chance to write the kind of code that I don't usually get to, but usually want to.

### Components

I created three individual components to illustrate the three requested states of the recipe widget:

* A version with checkboxes with 10 ingredients or fewer, where the "Show more" text *is not meant* to be seen.
* A version with checkboxes with 11 ingredients or more, where the "Show more" and "Show less" text *are both meant* to be seen.
* A version without checkboxes but with a paragraph of information with more than 10 lines.

Before we get to the components themselves, I would suggest you reload this page without the use of JavaScript, to make sure that I am being honest when I say that I am only using HTML and CSS. When JavaScript is disabled on this site, you will not see the small settings flyout on the lower right of the screen.

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
Ah okay, now things are getting a bit more interesting. The checkbox functionality is the same, but now we have a small block of text at the bottom of the widget that will open and close the widget. When the widget is open, the text will change from "Show more" to "Show less".

Lastly, let's take a look at the widget when it is used with a paragraph of text instead of checkboxes.
`}
            </Markdown>
            <RecipeParagraph />
            <Markdown>
                {`
Here we are seeing 10 lines of text with the same open/closed toggle from the previous component. When clicked, this component will open up to display the rest of the text in the paragraph. Click again and it will go back to only displaying 10 lines of text.

That's it for the components. I believe they implement the directions quite well.

### Code

To start, let's look at the HTML:
`}
            </Markdown>
            <HtmlCode />
            <Markdown>
                {`
Let's break this down. We start with \`!DOCTYPE\` and \`<html>\` tags, and some \`<head>\` and \`<body>\` info after that. We have three \`<div>\` tags with the class of \`recipe-widget\` after that. These are the components shown above. 

From the start I knew I wanted to use a \`<details>\` tag for this. This is because it gives us access to the very useful \`[open]\` attribute. Used with the \`<summary>\` tag to display information, we can predicate styling on the closed state (which is the default) and the \`[open]\` state as well.

One thing you will probably notice from the start is that I am only using one class name for this widget at the top level. This is intentional. I am not rigidly dogmatic about the use of classes and feel that as long as something is properly namespaced, in this instance with the \`div.recipe-class\` selector, that it is often easier to target loosely inside that namespace. This allows me to write simpler and more declarative CSS, which is always a goal. The relatively recent addition of [nesting to the CSS spec](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_nesting) makes this very simple to do. Of course, I've often worked with very specific naming methodologies, but if left to my own devices I will usually structure things like this.

Now let's move on to the CSS code:
`}
            </Markdown>
            <CssCode />
            <Markdown>
                {`
First we have a simple reset of the margin and padding properties for all elements using the \`*\` selector. I like to do this to make things a bit easier to work with, as some elements have default spacing properties I don't wish to use.

After that we get to the main part of the CSS, the definition for \`div.recipe-widget\`.

The first thing I do is create some locally scoped spacing and color variables. For something like this, I like to scope variables inside the component so I don't run the risk of interacting with any other variables in the global space.

Next I set the basic styling for the enclosing \`<div>\` tag. This includes things like fonts, colors, spacing and border properties. I also set the styling for the \`<h2>\` tag.

The next block, \`details\`, contains everything else for this CSS file. It contains a very few shared rules between the checkbox and paragraph implementations for this component. The most important of these is setting \`pointer-events\` to \`none\` for the entire component. The default behavior for a \`<details>\` tag is that any click inside the tag will result in the shifting of the open or closed state. Since I *only* want to have the "Show more" and "Show less" text open and close this component, I will disable \`pointer-events\` in the \`details\` block and opt the behavior back in for specific descendent elements.

I also hide the \`list-style\` property so I will not see the default triangle cursor that is usually seen on a \`<details>\` tag.

The next two blocks differentiate the styling applied to the checkbox version and the paragraph version. This is done by use of the [:has pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:has). We have one block of styling for when the \`<details>\` tag has a \`<ul>\` tag for a grandchild, and one for when it has a \`<p>\` tag for a grandchild.

In the checkbox styling, I define the needed styling for the \`<ul>\`, \`<li>\`, \`<label>\` and \`<input>\` tags. I also create an \`::after\` pseudo element for the \`<ul>\` tag but I do not yet set it to be active. I only want that to be active when there are 11 or more child \`<li>\` elements of the \`<ul>\` tag. I will set that condition next.

To create this condition I again use the \`:has\` pseudo-class, this time in combination with the [:nth-child pseudo class](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-child) with an argument of 11. Here I am saying that I *only* want the enclosed styles to be applied when there are 11 or more child \`<li>\` elements of the \`<ul>\` tag. The first style I apply in this block is to make all child \`<li>\` elements *after* the 11th to not display and I set the \`::after\` pseudo-class to be visible and to accept pointer events.

Since clicking the "Open more" text is the only thing that will set the \`[open]\` attribute of the \`<details>\` element, the rest of this styling can be done targeting the \`[open]\` attribute. Note that this could also be done by targeting the [:open pseudo-class](https://developer.mozilla.org/en-US/docs/Web/CSS/:open), but that pseudo-class is not currently supported in webkit based browsers.

In the \`[open]\` styling we need to set all of the \`<list>\` elements after the 11th to be visible by again applying styling with \`:nth-child\`. Here you will notice the use of an \`!important\` directive on the \`display\` rule. As a general thing I try to avoid these, but for here where this declaration cannot win on specificity alone, I think it's a fine use of it. I greatly enjoy using this technique to hide and display elements, because I can let the element's presence or absence dictate the height of the element and thus do not have to manually manage the size of the component or do too much math.

We also need to change the content of the \`ul::after\` element to "Show less".

The paragraph implementation uses a similar technique, but instead of counting the children and enforcing styles based on the number of child elements, we count the number of lines in the \`<p>\` element using the line height unit of measurement, \`lh\`. After the 10th element we hide the remaining lines and show them when the state is changed to \`[open]\`.

This code has been tested in Orion, Safari, Chrome, Firefox and Edge browsers.

## Task 2 - JavaScript optimization

[See the code for JavaScript optimization on GitHub (new tab will open)](https://github.com/timmalstead/kagi-tryout/tree/main).

If you wish to see this code running in isolation, you can [find it on GitHub pages (new tab will open)](https://timmalstead.github.io/kagi-tryout/). You can then open the console and target the functions \`benchmark\`, \`determineCourtHearingTime1\`, \`determineCourtHearingTime2\` and \`determineCourtHearingTime1\`.

### API

For your convenience, I've also placed those functions on this page, and you can target them by opening up on the console on dev tools. Note that if you turned off JavaScript to review the above HTML elements, you will need to turn it back on to test these functions.

On either page I would recommend using the following structure to call and benchmark the functions.

\`\`\`javascript
benchmark({
    callbackToBenchmark: determineCourtHearingTime1,
    callbackArgs: ["Timothy", 3, "Adam Betty Frank Mike"],
    expectedOutput: 60,
    timesToRun: 100,
})
\`\`\`

\`callbackToBenchmark\` is either of the three functions created for this exercise: \`determineCourtHearingTime1\`, \`determineCourtHearingTime2\` or \`determineCourtHearingTime3\`. I will detail each of these functions below.

\`callbackArgs\` is an array of the three arguments given for this exercise. The first is a string, a proper name with a beginning with a capital letter. The second is an integer representing the total number of judges at a given time and the third is a string of proper names beginning with capital letters, separated by spaces.

\`expectedOutput\` is the expected output of the \`callbackToBenchmark\`, when supplied with \`callbackArgs\`. If the actual output is not equal to the expected output, this will not prevent the function from being benchmarked.

\`timesToRun\` is an integer representing the total number of times to run the function while being benchmarked. Note that this is in addition to the first time the callback is called to determine its output.

This code is runtime agnostic, and should be able to run in Node, Bun or other JS runtimes.

As with the HTML and CSS code above, this is the *exact* code that was written for the Kagi tryout repo.

### Code

The instruction given for this task was:

> You are at court for a traffic ticket and there are 4 other people with you. You are told that everyone's hearing will be in alphabetical order. It takes 30 minutes for each hearing. All of the judges are free now and can see one person at a time. How long will it take for your hearing to end?
> Your inputs are:
> * string - your name
> * int - number of judges
> * string - names of four other people separated by spaces
> 
> Example:
> \`\`\`javascript
> court("Jules", 3, "Adam Betty Frank Mike")
> 60
> court("Zane", 1, "Mark Hank Ana Vivian")
> 150
> \`\`\`
> Write the fastest JavaScript routine that you possibly can. Include a simple benchmark. Submit when you can not get it any faster and explain your optimization journey.

With all of that in mind, I got to work on a first draft.
`}
            </Markdown>
            <CourtOne />
            <Markdown>
                {`
My first thought was that I wanted to use a Set, but I realized that there was no guarantee that there wouldn't be duplicate names given as arguments. Since a Set would dedupe those, it would probably be better not to go down that path.

From what I could see, it was a safe assumption that we would always get proper names given to us with one capital letter at the start. Thus we could use the tried and true method of splitting on a space and sorting the resulting array with the \`Array.sort\` method. When used without an argument, \`Array.sort\` sorts by the UTF code unit values, which fortunately for us means it also sorts alphabetically.

After that, I used a \`while\` loop to consume the array, splicing out a length equal to the amount of working judges and checking to see if my name was in that group. If it was, I would break the loop. If it was not, I would continue until the entire group had been consumed. Either way, I would increment the mutable \`timeUntilMyHearingIsOver\` integer variable. After that is done I return the increment count times thirty.

I like this solution, it's clean and not overly verbose. It avoids nested iterations and should have a linear runtime. I began to wonder, though, if it might be solving for all the possible permutations of the problem. What if multiple people showed up with the same name as the person who was being targeted? Maybe it would make sense to do another version with a specific bit of state to keep track of who the person being targeted is, even among those with the same name.
`}
            </Markdown>
            <CourtTwo />
            <Markdown>
                {`
This is a bit better. It keeps track of who I am, even among people with the same name. It does add extra iterations and thus a longer runtime, but I thought that was surely a fine tradeoff for the extra safety it would bring.

Until I realized it didn't really add anything.

I had fallen into the classic engineer's trap of solving for a problem that wasn't there. Sure, it would be great to keep track of who the targeted person was among other people who may have the same name, IF there was a concept of arrival time among the inputs. But there wasn't. With the problem as it was stated, you would need to assume that ANY name that was the same name being targeted was the correct name. So my first answer would have been more performant and thus preferable.

After this, I thought long and hard about what could be done to optimize my first solution. There was nothing in what I had written that I could think to improve upon. I couldn't think of any ways to reduce iterations in the preparation of the queue or in the consumption of it, and I couldn't think of any code that was there that did not need to be. I also couldn't think of anything that needed to be added. It had one job to do and, as far as I could tell, it was doing it well, accurately and in an efficient way.

The only thing I could think to do, and this was a longshot, was to write a version that did not make use of methods and only used imperative code and c-style loops, as I know that function calls can be expensive in JavaScript, especially when used with callbacks and iterations.
`}
            </Markdown>
            <CourtThree />
            <Markdown>
                {`
I don't love this. I'm not a big fan of breaking down things like this instead of using trusted abstractions to deal with (usually) already solved problems, but it just *might* squeeze out a little bit more performance. It does introduce some nested looping in the sorting of the names, but as I understand it the native sort functions in JavaScript abstract over that as well. There's not really a way fully around it.

So now we have three pretty good functions that solve the presented problem. Let's move on to some benchmarks.

### Benchmarking

From the start, I knew I wanted to make use of the native [Performance web api](https://developer.mozilla.org/en-US/docs/Web/API/Performance), and include an option to average out multiple iterations of the callback and also to inform in the function output what was expected. I came up with the following.
`}
            </Markdown>
            <Benchmark />
            <Markdown>
                {`
I'm pretty happy with it. To the benchmarks!

To start with, all of these are very much fast enough to deal with the problem as presented above. Figuring out the order 5 people will be seen in is something all of these algorithms will deal with quite handily. In my testing, which can be viewed in the console, I am seeing average execution times all on the order of thousandths of a millisecond. To see real difference in these, the kind of difference that a human would notice, I believe you would have to extend the list of people to be seen into the hundreds of thousands, possibly into the millions.

I was correct that my second solution, which included the unneeded additional state about which name was mine, did perform more slowly. But not by much! In my testing on the console of this page, I often saw around a 1-2 thousandth of a millisecond difference between my first and second solutions, and about the same difference between the first second and the third as well. Usually I am seeing ~2-3 thousandths of a millisecond on average to completion with the first and third and around ~2.5-5 thousandths with the second. Again, I would not use my second solution because I think that it has parts that are unneeded and without purpose, but it will perform just fine to find the answer for 5 people.

Of more interest to me was the comparison between my first and third solutions. On average I would see ~1.5 thousandths of a millisecond average difference in completion time, *usually* in favor of my first solution. Sometimes the third solution would beat it in speed, but not very often. I'm running these tests on a Mac book and so, there are a lot of processes going on and it's difficult to control for them all.

I confess that I thought my third was going to be more efficient. I was mistaken. Even though it's imperative code and does not make use of methods, it tends to run just a hair slower. I believe this is down to the array methods I'm using being native code. That is to say, again as I understand it, that calls to these methods are actually passed off to C++ or other machine code by the runtime which can be run much more quickly than in an interpreted language like JavaScript. This seems to be true for both Node and the browsers that I ran this on (Orion, Chrome, Safari, Firefox and Edge).

Speaking more on the browsers, I believe that there are differences in the way certain browsers calculate the duration of the performance api tools. In Orion, Safari and Firefox: the benchmarking results would often return 0 milliseconds as the time run if you running less than 500 times. Chrome and Edge seemed to give much more fine-grained results with fewer iterations.

So, in the end, I think that either my first or third functions would be a good solution to this problem. If this problem ran into the millions of names for inputs, I think further testing would be in order and it would depend heavily on what kind of machine and runtime it was being executed.

In practice though, I would go with my first solution pretty much all the time. It's concise, gets the job done well and any possible performance losses are academic. As it turned out, I think I got it right the first time and then wrote two more functions that proved that point, more or less. It's not always like that, but sometimes it is.

I would encourage you to open the console on either this page or my source code and try the solutions yourself, and please let me know if you see something that I did not. I tend to view writing performant code as much an art as a science, and there is always more to learn.

## Conclusion

I had fun with these! Being able to solve problems in new and interesting ways using only the raw materials of the web remains one of the most satisfying things for me as an engineer. Also, I learned some new stuff too. Before this assignment I had never had occasion to use the CSS \`:has\` pseudo-class to effectively create control-flow in a component tree before. Fun!

Thank you again for the consideration of my work. I hope that you will have as much fun reading about my thought process as I had writing about it.

Enjoy, and I hope to hear from you soon! 🖖
`}
            </Markdown>
            <LastModified lastModifiedDate={1756341625784} />
        </main>
    )
}

export default KagiTryout
