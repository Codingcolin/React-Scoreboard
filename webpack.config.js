var webpack = require('webpack')
var path = require('path')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'react_bundle.js',
    path: path.join(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: ['babel-loader']
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      }
    ]
  }
}
