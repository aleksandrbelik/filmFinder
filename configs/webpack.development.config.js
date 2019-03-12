const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.config.js');
const webpack = require('webpack');

const rootFolder = __dirname + '/../';

module.exports = merge(base, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(rootFolder, 'dist'),
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});