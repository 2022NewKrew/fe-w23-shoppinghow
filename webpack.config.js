const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const fe="frontend"

module.exports = {
    mode: "development",
    entry: `./${fe}/src/index.js`,
    output: {
        path: path.join(__dirname, "/backend/public/dist"),
        publicPath:"/dist",
        filename: 'bundle..js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use : [
                    'file-loader?name=img/[name].[ext]?[hash]',
                    'image-webpack-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin(
        {
            template: `./frontend/src/index.html`
        },
    )],
    devtool: 'inline-source-map',
}