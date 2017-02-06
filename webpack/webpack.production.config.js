'use strict';

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StatsPlugin = require('stats-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.join(__dirname, '../'),
  entry: {
    shop: path.join(__dirname, '../src/entry/shop/shop.js'),
    manage: path.join(__dirname, '../src/entry/manage/manage.js'),
  },
  output: {
    path: path.join(__dirname, '../dist/'),
    filename: '[name]-[hash].min.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      inject: 'body',
      chunks: ['shop'],
      filename: 'shop.html'
    }),
    new HtmlWebpackPlugin({
      template: 'src/template.html',
      inject: 'body',
      chunks: ['manage'],
      filename: 'manage.html'
    }),
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
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CopyWebpackPlugin([
        { from: 'static' }
    ])
  ],
  module: {
    loaders: [
      { test: /\.(png|jpg|gif|ico)$/, loader: 'file-loader?name=img/img-[hash:6].[ext]' },
      { test: /\.(ogg|webm|mp4|swf|wav|mp3)$/, loader: 'file-loader?name=play/play-[hash:6].[ext]' },
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel',
        query: {
          'presets': ['es2015', 'stage-0', 'react'],
          'plugins': [['import', [{ 'libraryName': 'antd', 'libraryDirectory': 'lib', 'style': 'css' }]]]
        }
      },
      { test: /\.json?$/, loader: 'json' },
      { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css?modules&localIdentName=[local]') }
    ]
  },
  postcss: [
    require('autoprefixer')
  ]
};
