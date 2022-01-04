const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("./webpack.config");
const compiler = webpack(config);

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});

module.exports = app;
