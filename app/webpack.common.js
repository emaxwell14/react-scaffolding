const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app: ['./src/index.jsx'],
        vendor: [
            'lodash'
        ]
      },
      module : {
          rules : [
            {
              test: /\.jsx?/,
              loader: 'babel-loader',
              exclude: /node_modules/
            }
          ]
    },
    plugins: [
	 new CleanWebpackPlugin(['dist']), // Cleans dist dir. Removes as using HTML plugin
	 new HtmlWebpackPlugin({ // Creates index.html in dist drive
         inject: true,
         // filename: 'src/index.html',
         template: 'src/index.html', // Used to set name of div to attach react base
         title: 'Development'
    }),
	  new webpack.HashedModuleIdsPlugin(),
      new webpack.optimize.CommonsChunkPlugin({
       name: 'vendor'
     }),
      new webpack.optimize.CommonsChunkPlugin({
        name: 'manifest'
      })
  ],
  output: {
    filename: '[name].[checkhash].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
