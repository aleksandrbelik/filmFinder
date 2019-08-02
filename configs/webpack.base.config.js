/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootFolder = path.resolve(__dirname, './../');

module.exports = {
  entry: path.resolve(rootFolder, './src/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(rootFolder, './dist')
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'FilmFinder'
    })
  ],
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader' // creates style nodes from JS strings
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }, {
          loader: 'less-loader' // compiles Less to CSS
        }]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      Components: path.resolve(rootFolder, './src/components'),
      Common: path.resolve(rootFolder, './src/components/common'),
      State: path.resolve(rootFolder, './src/state'),
      Utils: path.resolve(rootFolder, './src/utils'),
      Styles: path.resolve(rootFolder, './src/styles')
    }
  }
};
