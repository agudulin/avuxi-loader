var path = require('path')

module.exports = {
  context: path.join(__dirname, 'example'),
  entry: {
    javascript: './index.js',
    css: './style.css'
  },

  output: {
    publicPath: '/assets/',
    path: path.join(__dirname, '/example'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: { presets: ['es2015', 'react'] }
    }, {
      test: /\.css$/,
      loader: 'file?name=[name].[ext]'
    }]
  }
}
