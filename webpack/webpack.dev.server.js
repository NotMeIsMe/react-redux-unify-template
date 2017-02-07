// 开发环境, 主要完成热加载(webpack-isomorphic-tools, 无法跟webpack-dev-middleware共用)
const Express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../src/config.js');
const logger = require('../src/log4j/log4j.js');
const webpackConfig = require('./webpack.dev.config.js');

const app = new Express();
const compiler = webpack(webpackConfig);
const middleware = webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  contentBase: `http://${config.host}:${config.devPort}`,
  quiet: true,
  noInfo: true,
  hot: true,
  inline: true,
  lazy: false,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    modules: false,
    chunkModules: false,
  }
});
app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.listen(`${config.devPort}`, (err) => {
  if (err) logger.error(err);
  logger.info('Webpack development server listening on port %s', `${config.devPort}`);
});

