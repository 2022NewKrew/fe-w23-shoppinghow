const { merge } = require('webpack-merge');
const commonWebpack = require('./webpack.config.common');
const path = require('path');

module.exports = merge(commonWebpack, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, '../build'),
    host: 'localhost',
    port: 3000,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
});
