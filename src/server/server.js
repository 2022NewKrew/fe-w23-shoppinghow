const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const path = require("path");
const cors = require("cors");

const app = express();
const config = require("../../webpack.config");
const compiler = webpack(config);

const port = 3000;

app.use(cors());

// 기본 설정 파일
app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get("/topItems.json", (req, res) => {
  res.sendFile(path.join(__dirname, "/data", "topItems.json"));
});

app.get("/themeItems.json", (req, res) => {
  res.sendFile(path.join(__dirname, "/data", "themeItems.json"));
});

app.get("/planningItems.json", (req, res) => {
  res.sendFile(path.join(__dirname, "/data", "planningItems.json"));
});

app.listen(port, function () {
  console.log("Example app listening on port 3000!\n");
});
