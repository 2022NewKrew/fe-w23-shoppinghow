import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

const __dirname = path.resolve();

export default {
    mode: "development",
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "static/js/bundle.js",
        publicPath: "http://localhost:3000/dist",
    },
    devtool: "eval-source-map",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.(sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".js"],
        alias: {
            "@components": path.resolve(__dirname, 'src/components'),
            "@scss": path.resolve(__dirname, "src/scss"),
            "@utils": path.resolve(__dirname, "src/utils"),
            // '@api': path.resolve(__dirname, 'src/api'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./public/index.html" }),
        new MiniCssExtractPlugin({ filename: "static/css/style.css" }),
    ],
};
