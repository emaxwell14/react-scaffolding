// const merge = require('webpack-merge'); // Was overwriting common...
const common = require('./webpack.common.js');
const webpack = require('webpack');

common.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
);

common.devtool = 'source-map';
common.output.publicPath = '/';
module.exports = common;
