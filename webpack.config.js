const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const babelConfing = require('./babel.config.json');
const dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: babelConfing,
                },
            },
            {
                test: /\.s?css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
            {
                test: /\.png$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]?[hash]',
                        },
                    },
                ],
            },
        ],
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin({ filename: 'app.css' }),
        new webpack.DefinePlugin({
            SERVER_BASE_URL: JSON.stringify(process.env.SERVER_BASE_URL),
        }),
    ],
    resolve: {
        alias: {
            '@core': path.resolve(__dirname, 'src/core/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@sass': path.resolve(__dirname, 'src/sass/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@utils': path.resolve(__dirname, 'src/utils/'),
            '@api': path.resolve(__dirname, 'src/api.js'),
        },
    },
};
