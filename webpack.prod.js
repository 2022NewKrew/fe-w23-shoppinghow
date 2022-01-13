const webpack = require('webpack');
const { merge } = require('webpack-merge');
const Dotenv = require('dotenv-webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const common = require('./webpack.common.js');

const HTML_TEMPLATE = 'assets/production.html';

module.exports = merge(common, {
  mode: 'production',
  // devtool: "source-map", // 배포 디버깅용
  optimization: {
    usedExports: true,
    minimize: true,
    minimizer: [new TerserPlugin(), new CssMinimizerPlugin()],
    splitChunks: {
      chunks: 'all',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({ path: '.env.production' }),
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production',
      DEBUG: false,
    }),
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE,
      title: '쇼핑나우',
      filename: 'home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE,
      title: '쇼핑나우 | 더미',
      filename: 'dummy.html',
      chunks: ['dummy'],
    }),
  ],
});
