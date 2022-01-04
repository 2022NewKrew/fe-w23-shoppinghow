import express from "express";
import path from "path";
import webpack from "webpack";
import webpackConfig from "./webpack.config.js";
import webpackDevMiddleware from "webpack-dev-middleware";

const app = express();
const transpiler = webpack(webpackConfig);
const __dirname = path.resolve();

app.use(webpackDevMiddleware(transpiler, {
    publicPath: webpackConfig.output.publicPath,
}));

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "dist/index.html");
});

app.listen(3000, () => {
    console.log("running on 3000 port");
});
