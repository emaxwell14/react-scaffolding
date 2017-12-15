const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');


common.plugins.push(new webpack.HotModuleReplacementPlugin(),
 new webpack.NamedModulesPlugin());

// common.entry.app.push('webpack-hot-middleware/client');

common.output.publicPath = '/';

module.exports = common;

/* TODO REPLACES common for some reason
module.exports = merge(common, {
  entry: {
	  app: [
		'webpack-hot-middleware/client', './src/index.js'
	  ]
  },
  plugins: [
     new webpack.HotModuleReplacementPlugin(),
	 new webpack.NamedModulesPlugin(),
  ],
  output: {
	publicPath: '/'
  }
});

*/
