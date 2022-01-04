const express = require("express");
const path = require("path");
const server = express();
const apiRouter = require("./routers/api");

//TODO : 아직 사용법 모르겠어서 적용x 추후 적용 예정
// //webpack 미들웨어 사용
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const webpack = require('webpack');
// const webpackConfig = require('./webpack.config.js');
// const compiler = webpack(webpackConfig);
// server.use(webpackDevMiddleware(compiler, {
//   publicPath: webpackConfig.output.publicPath,
// }))

server.set("port", 8080);

server.use(express.static(path.join(__dirname, "public")));

//bundle된 index.html '/' 주소로 요청
server.get("/", (req, res) => {
  console.log(__dirname);
  res.sendFile(path.resolve(__dirname, "./public/dist/index.html"));
});

//api문서
server.use("/api", apiRouter);

server.listen(server.get("port"), () => {
  console.log("http://localhost:" + server.get("port"));
});
