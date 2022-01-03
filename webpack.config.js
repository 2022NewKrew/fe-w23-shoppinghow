const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/public/scripts/main.js",
    output: {
        path: path.resolve(__dirname, "src/dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.scss$/, // .css 확장자로 끝나는 모든 파일
                use: ["style-loader", "css-loader"],
            },
        ],
    },
};
