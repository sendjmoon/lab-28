'use strict';

const ExtractText = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');
const webpack = require('webpack');

const API_URL = JSON.stringify(process.env.API_URL || 'http://localhost:3000');

let plugins = [
  new ExtractText('bundle.css'),
  new webpack.DefinePlugin({
    __API_URL__: API_URL
  })
];

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build',
    filename: 'bundle.js'
  },
  plugins: plugins,
  postcss: function() {
    return [autoprefixer];
  },
  sassloader: {
    includePaths: [`${__dirname}/app/scss/lib`]
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss!sass!')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.(woff|svg|eot|ttf).*/,
        loader: 'url?limit=10000&name=font/[name].[ext]'
      }
    ]
  }
};
