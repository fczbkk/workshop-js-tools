const path = require('path')
const autoprefixer = require('autoprefixer')

module.exports = {
  mode: (process.env.NODE_ENV === 'production') ? 'production' : 'development',
  entry: path.resolve(__dirname, 'src/index.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build/'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: [
          'babel-loader'
        ]
      },
      /*
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              "@babel/plugin-syntax-dynamic-import"
            ]
          }
        }
      }
      */
      {
        test: /\.svg$/,
        loaders: [
          'file-loader',
          'svgo-loader'
        ]
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer
              ]
            }
          }
        ]
      }
    ]
  }
}
