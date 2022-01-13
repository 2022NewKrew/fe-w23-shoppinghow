const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: path.resolve(__dirname, "../src/public/scripts/Main.js"),
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "bundle.js",
    clean: true,
  },
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "../src/public/scripts/core"),
      "@components": path.resolve(__dirname, "../src/public/scripts/components"),
      "@utils": path.resolve(__dirname, "../src/public/scripts/utils"),
      "@store": path.resolve(__dirname, "../src/public/scripts/store"),
    },
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
                  targets: "> 0.25%, not dead",
                  useBuiltIns: "usage",
                  corejs: { version: 3, proposals: true },
                },
              ],
            ],
            plugins: ["@babel/transform-runtime"], // 폴리필 플러그인
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
    new MiniCssExtractPlugin({
      filename: "css/style.css",
    }),
    new HtmlWebpackPlugin({
      filename: "main.html",
      template: "src/pages/main.html",
    }),
  ],
};
