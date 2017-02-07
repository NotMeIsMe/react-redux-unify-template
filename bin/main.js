// 原本服务器是不用es6语法的, 为了服务器渲染兼容前端es6
require('../server.babel');

const WebpackIsomorphicTools = require('webpack-isomorphic-tools');
const context = require('path').resolve(__dirname, '../');
const wic = require('../webpack/webpack.iso.config');

// 全局变量
global.WebpackIsomorphicTools = new WebpackIsomorphicTools(wic)
.server(context, () => require('../src/server'));
