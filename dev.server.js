const express = require('express')
const webpack = require('webpack')
const path = require('path')
const webpackDevConfig = require('./config/webpack.dev')
const webpackCompiler = webpack(webpackDevConfig)

const app = express()

app.use(
  require('webpack-dev-middleware')(webpackCompiler, {
    publicPath: webpackDevConfig.output.publicPath,
    noInfo: true
  })
)

app.use(
  require('webpack-hot-middleware')(webpackCompiler, {
    log: false,
    path: '/__what',
    heartbeat: 2000
  })
)
app.use('*', (req, res) =>
  res.sendFile(path.resolve(__dirname, './public/index.html'))
)

app.listen(3000, () => {
  console.log('app running on port 3000')
})
