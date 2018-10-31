const common = require('./webpack.common')
const webpackMerge = require('webpack-merge')

const dev = {
  mode: 'production',
  devtool: 'source-map'
}

module.exports = webpackMerge(common, dev)
