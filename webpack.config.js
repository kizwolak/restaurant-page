const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
import html from "./file.html";


module.exports = {
  mode: 'development',
  entry: [
    './src/index.js',
    './src/index.html',
  ],
  output: {
    filename: './dist/[name].main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      title: 'Alfredo\'s',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
     {
       test: /\.(png|svg|jpg|jpeg|gif)$/i,
       type: 'asset/resource',
     },
     
     { test: /\.html$/i, 
     loader: "html-loader", },
    ],
  },
};