// Server for development with hot reloading

const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const proxy = require('http-proxy-middleware');
const PORT = 80;

const app = express();
// TODO for prod, use npm build?
const config = require('./webpack.dev.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

// Use reverse proxy for /app
app.use('*', proxy('/app', {
    target: 'http://localhost/',
    ws: true,                         // proxy websockets
    pathRewrite: {
      '^/app': '/',     // rewrite path
    },
}));

// Serve the files on port 80.
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}!\n`);
});
