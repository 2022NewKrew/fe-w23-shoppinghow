const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        include: path.resolve("node_modules"),
        sideEffects: false,
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }, 
    ],
  },
  resolve: {
    extensions: ['js', 'json', 'ts'],
  },
  plugins: [new HtmlWebpackPlugin(
    {
      template: 'views/index.html'
    }
  )]
};