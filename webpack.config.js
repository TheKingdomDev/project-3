const { resolve } = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const srcDir = resolve(__dirname, 'src')
const publicDir = resolve(__dirname, 'public')

module.exports = {
  entry: `${srcDir}/index.js`,
  output: {
    filename: 'bundle.js',
    path: publicDir
  },
module: {
    rules: [
      {
        //TODO: change to eslint rule once config is established
        enforce: 'pre',
        test: /\.js$/,
        loader: 'standard-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: { 
          presets: ['react', 'es2015'], 
          plugins: ['transform-class-properties', 'transform-es2015-spread'] 
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader?modules,camelCase,localIdentName="[name]_[local]-[hash:base64:6]"'
        })
      }
  ]
  },
}