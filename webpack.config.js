const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true,
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.png$/,
                use: [{
                    loader: "file-loader",
                    options: {
                        name: '[name].[ext]?[hash]'
                    }
                }]
            },
            {
                test: /\.s[ac]ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    devtool: "inline-source-map",
    devServer: {
        static: "./dist"
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "src/index.html" }),
        new MiniCssExtractPlugin({ filename: "app.css "}),
        // new CleanWebpackPlugin()
    ]
}