// TODO: write a proper API function to upload markdown info so I won't have to do this
const [copyToStrip] = process.argv.slice(2)
console.log(copyToStrip.replaceAll("\n\n", "\\n").replaceAll("*", "\\n*"))
