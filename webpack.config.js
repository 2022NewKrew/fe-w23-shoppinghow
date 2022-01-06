const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/",
  },
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@core": path.resolve(__dirname, "src/core"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@style": path.resolve(__dirname, "src/sass"),
    },
  },
  devServer: {
    static: "./dist",
  },
  devtool: "inline-source-map",
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
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              // 2 => postcss-loader, sass-loader
              importLoaders: 2,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.module\.css$/i,
        use: [
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
  ],
};
