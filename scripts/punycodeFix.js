// taken from https://github.com/mathiasbynens/punycode.js/issues/137

// the punycode fix does not currently work in production for some reason. it eliminates the spamming in the logs of the punycode deprecation, but it throws a 500 error when i attempt to load a page

// if there is a way to get it to work in the future, remember that you will need to manually install it in the final phase of the docker build, and keep it in sync with what is in the package.json

// i include this script in the local dev and start scripts to limit spam, but do not include it in the dockerfile because of the prod error

// i do the punycode subsittution in the build step, will it work in the prod build?

// going to uninstall module-alias if I'm not going to be running this script in any meaningful way
// require("module-alias").addAlias("punycode", "punycode/")

console.log(
    "if you're seeing this, the punycode fix script is running for some reason"
)
