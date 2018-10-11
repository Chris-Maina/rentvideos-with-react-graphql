const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const cleanOptions = {
  root: path.resolve(__dirname), // root folder
  verbose: true,  // log what is happening
  exclude: ['ignore.js'],
}

module.exports = {
  entry: {
    main: './client/src/index.js',
  },
  output: {
    path: path.join(__dirname, 'client', 'build'),
    filename: '[name].[chunkhash].bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(__dirname, 'client', 'src'),
        use: ['eslint-loader', 'babel-loader']
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, // or test: /\.(png|woff|woff2|eot|ttf|svg)(\?.*$|$)$/
        use: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([path.resolve(__dirname, 'client', 'build')], cleanOptions),
    new MiniCssExtractPlugin({ // extracts CSS into separate files. It creates a CSS file per JS file which contains CSS.
      filename: "[name].css",
      chunkFilename: "[id].css"  
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all', // allows us to extract common dependencies into an existing entry chunk or an entirely new chunk
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all"
        }
      }
    }
  },
  resolve: {
    extensions: ['.js', '.scss', 'jsx']
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client', 'build'),
    inline: true,
    port: 3000
  }
};
