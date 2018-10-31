const webpack = require('webpack');
const common = require('./webpack.common')
const webpackMerge = require('webpack-merge')

const dev = {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = webpackMerge(common, dev)
