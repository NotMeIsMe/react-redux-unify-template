const path = require('path');
const webpack = require('webpack');
const config = require('../src/config.js');
const wtc = require('./webpack.iso.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

const WebpackIsomorphicTools = new WebpackIsomorphicToolsPlugin(wtc).development();

console.log('isProduction2 = ', process.env.NODE_ENV);

module.exports = {
  devtool: 'inline-source-map',
  context: path.join(__dirname, '../'),
  entry: {
    client: [`webpack-hot-middleware/client?reload=true&path=http://${config.host}:${config.devPort}/__webpack_hmr`, path.join(__dirname, '../src/client.js')]
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name]-[hash].js',
    publicPath: `http://${config.host}:${config.devPort}/`
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: `'${process.env.NODE_ENV}'`
      }
    }),
    new CopyWebpackPlugin([
      { from: 'static' }
    ]),
    WebpackIsomorphicTools
  ],
  module: {
    loaders: [
      { test: /\.(png|jpg|gif|ico)$/, loader: 'file-loader?name=img/img-[hash:6].[ext]' },
      { test: /\.(ogg|webm|mp4|swf|wav|mp3)$/, loader: 'file-loader?name=voice/voice-[hash:6].[ext]' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'stage-0', 'react'],
          plugins: ['transform-decorators-legacy']
        }
      },
      { test: /\.json?$/, loader: 'json' },
      { test: /\.less$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!less?outputStyle=expanded&sourceMap' },
      { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' },
      { test: /\.css$/, loader: 'style!css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]' }
    ]
  },
  progress: true,
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  }
};
