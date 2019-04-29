const merge = require('webpack-merge')
const common = require('./webpack.common')
const webpack = require('webpack')
const path = require('path')

module.exports = merge(common, {
  entry: {
    app: [
      'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false',
      path.resolve(__dirname, '../src/index.js')
    ]
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './public'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
})
