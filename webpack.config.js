var path = require('path')
var HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'index.js'
  },
  plugins: [
    new HTMLWebpackPlugin({ inject: "body" })
  ],
  module: {
    rules: [{
      test: /\.json$/,
      exclude: [ /node_modules/ ],
      use: [ path.resolve('./loader.js') ]
    }]
  }
}
