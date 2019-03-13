const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootFolder = __dirname + '/../';

module.exports = {
  entry: path.resolve(rootFolder, 'src/index.js'),
  output: {
		filename: 'bundle.js',
		path: path.resolve(rootFolder, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
    	title: 'FilmFinder'
    })
  ],
  module: {
  	rules: [
  		{
  			test: /\.css$/,
  			use: [
  				'style-loader',
  				'css-loader'
  			]
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
  			exclude: /node_modules/,
  			query: {
          presets: ['es2015', 'react', 'stage-0']
        }
  		}
  	]
  }
};