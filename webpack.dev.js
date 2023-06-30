const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');
const common = require('./webpack.common');

const root = (path) => resolve(__dirname, `./${path}`);

module.exports = merge(common, {
  entry: {
    app: root('src/index.js'),
  },
  output: {
    filename: '[name].js',
    path: root('dist'),
    publicPath: '/',
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    port: 8080,
    disableHostCheck: true,
    host: 'localhost',
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: ['style-loader', 'css-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: root('public/index.html'),
    }),
  ],
});
