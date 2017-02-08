'use strict';
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const wtc = require('./webpack.iso.config');
const WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin');

const WebpackIsomorphicTools = new WebpackIsomorphicToolsPlugin(wtc).development();

module.exports = {
  context: path.join(__dirname, '../'),
  entry: {
    client: path.join(__dirname, '../src/client.js')
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[name]-[hash].min.css'),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
        screw_ie8: true
      }
    }),
    new StatsPlugin('webpack.stats.json', {
      source: false,
      modules: false
    }),
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
      { test: /\.(ogg|webm|mp4|swf|wav|mp3)$/, loader: 'file-loader?name=play/play-[hash:6].[ext]' },
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
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[local]___[hash:base64:5]') }
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
