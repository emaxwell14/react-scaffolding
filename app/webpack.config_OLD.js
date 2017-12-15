const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
	  app: [
		  './src/index.js',
		  'webpack-hot-middleware/client' // Tell hot reloader about changes
	  ]
  },
  plugins: [
	 new CleanWebpackPlugin(['dist']), // Clean dist folder on build
     new webpack.HotModuleReplacementPlugin(), // Dev server with hot reload
	 new webpack.NamedModulesPlugin(), // Tells dev server what file is updated
	 new HtmlWebpackPlugin({ // Dynamically creates index.html
        title: 'Development'
      }),
	 new webpack.UglifyJSPlugin() // Excludes unused imports/exports in bundle.js. Also can compress, sourcemap etc
   ],
  output: {
    filename: '[name].bundle.js', // Name passes 'app' from above
    path: path.resolve(__dirname, 'dist'),
	publicPath: '/'
  }
};