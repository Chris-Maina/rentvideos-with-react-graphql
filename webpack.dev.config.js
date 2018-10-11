const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const common = require('./webpack.common.config');

module.exports = merge(common, {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({ 
      template: path.resolve(__dirname, 'client', 'src', 'index.html'),
      hash: true,
      chunks: ['main', 'vendors']
    })
  ],
  devtool: 'cheap-eval-source-map'
})
