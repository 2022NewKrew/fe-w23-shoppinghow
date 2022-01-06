const { merge } = require('webpack-merge');
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
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE,
      filename: 'home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      template: HTML_TEMPLATE,
      filename: 'dummy.html',
      chunks: ['dummy'],
    }),
  ],
});
