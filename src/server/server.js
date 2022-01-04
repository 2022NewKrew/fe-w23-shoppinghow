const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");

const app = express();
const config = require("../../webpack.config");
const compiler = webpack(config);

// 기본 설정 파일
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!\n");
});
