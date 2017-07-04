module.exports = {
    
    context: __dirname,
    entry: "./js/main.js",
    output: {
        path: __dirname + "/bin",
        filename: "scrips.bundled.js"
    }
}