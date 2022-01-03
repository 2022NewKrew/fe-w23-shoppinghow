const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleWare = require("webpack-dev-middleware");
// const path = require("path");

const app = express();
const config = require("../webpack.config.js");
const compiler = webpack(config);
const PORT = process.env.PORT || 8080;

app.use(express.static("src"));
app.use(
    webpackDevMiddleWare(compiler, {
        publicPath: config.output.publicPath
    })
)

app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);
})