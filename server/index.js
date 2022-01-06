const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleWare = require("webpack-dev-middleware");
const path = require("path");

const app = express();
const config = require("../webpack.config.js");
const compiler = webpack(config);
const PORT = process.env.PORT || 8080;

const __rootDir = path.resolve();
app.use(express.static("../dist"));

app.use(
    webpackDevMiddleWare(compiler, {
        publicPath: config.output.publicPath
    })
)

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__rootDir, "dist", "index.html"));
})

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})