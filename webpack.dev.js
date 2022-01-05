const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common.js');

const HTML_TEMPLATE = 'assets/develop.html';

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  watch: true,
  watchOptions: {
    ignored: /node_modules/,
    aggregateTimeout: 600, // 빌드 후 600ms간 watch를 딜레이 한다.
    poll: 1000, // 1초마다 변화를 감지한다.
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '개발모드 | 쇼핑나우',
      template: HTML_TEMPLATE,
      filename: 'home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      title: '개발모드 | 쇼핑나우 | 더미',
      template: HTML_TEMPLATE,
      filename: 'dummy.html',
      chunks: ['dummy'],
    }),
  ],
});
