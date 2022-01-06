const path = require("path");

//여기도 추가
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/, // 정규표현식 .scss .css로 끝나는 파일 찾기
        use: [
          // 순서 중요! 역순으로 실행된다.
          MiniCssExtractPlugin.loader, // style-loader와 호환되지 않음 둘중 하나만 사용
          "css-loader",
          "resolve-url-loader",
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({ filename: "styles/app.css" }),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "assets" }, // copy할 디렉토리 이름
      ],
    }),
  ],
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
};
