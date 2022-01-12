import express from "express";
import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import config from "../../web/webpack.config.js";
import cors from "cors";

import APIRouter from "./routers/index.js";

const compiler = webpack(config);
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// app.use(
//   webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath,
//   })
// );

app.use("/api/v1", APIRouter);

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log("Example app listening on port 3000!\n");
});
