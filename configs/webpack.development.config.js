const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const base = require('./webpack.base.config.js');

const rootFolder = path.resolve(__dirname, './../');

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(rootFolder, './dist'),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
