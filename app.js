import express from "express";
import path from "path";
import fs from "fs";
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

app.get("/search-ranking", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./public/data/searchRankings.json", "utf8"));
    res.json(data);
});

app.get("/carousel-images", (req, res) => {
    const data = JSON.parse(fs.readFileSync("./public/data/carouselImages.json", "utf8"));
    res.json(data);
});

app.listen(3000, () => {
    console.log("running on 3000 port");
});
