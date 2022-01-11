const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  mode: 'development',
  entry: ['./public/javascripts/index.js', './public/stylesheets/sass/app.scss'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: "http://localhost:3000/dist"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        exclude: /node_modules/
      },
    ],
  },
  resolve: {
    extensions: ['js', 'json'],
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin(
      {
        template: 'views/index.html'
      }
    ),
    new MiniCssExtractPlugin(
      { 
        filename: 'css/style.css' 
      }
    ),
  ]
};
