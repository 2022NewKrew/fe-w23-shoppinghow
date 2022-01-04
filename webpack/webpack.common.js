const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: "./src/public/scripts/main.js",
    output: {
        path: path.resolve(__dirname, "src/build"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            [
                                "@babel/preset-env",
                                {
                                    targets: "> 1%, not dead", // 주어진 조건
                                    useBuiltIns: "usage",
                                    corejs: { version: 3, proposals: true },
                                    modules: false, // tree shaking
                                },
                            ],
                        ],
                        plugins: [],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                // css 파일을 별도 분리한다.
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: ["file-loader"],
            },
        ],
    },
    plugins: [
        // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
        new MiniCssExtractPlugin({ filename: "css/style.css" }),
        new HtmlWebpackPlugin({
            template: "src/pages/main.html",
            filename: "main.html",
            chunks: ["home"],
        }),
    ],
};
