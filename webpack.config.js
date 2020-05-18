const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {mode, isDevelopment, port} = require('./modules/mode.js')
const {logger} = require('./modules/logger.js')


// const isProduction = process.env.NODE_ENV === 'production'
// const isDevelopment = !isProduction

logger()
mode()

// console.log( "Production mode:", isProduction )
// console.log( "Development mode:", isDevelopment )
// console.log( '\n' )
// console.log( '\n' )

const filename = (file) => isDevelopment ?  `cluster[hash].${file}` : `cluster.${file}`

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: "development",
    entry: './index.js',
    output: {
        filename: filename('js'),
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
      extensions: ['.js'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@core': path.resolve(__dirname, 'src/core')
      }
    },
    devtool: isDevelopment ? 'source-map' : false,
    devServer: {
        port,
        hot: isDevelopment
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HTMLWebpackPlugin({
          template: 'index.html',
          minify: {
              removeComments: true,
              collapseWhitespace: true
          }
      }),
      new CopyPlugin({
        patterns: [
          { 
          from: path.resolve(__dirname, 'src/favicon.ico'),  
          to: path.resolve(__dirname, 'dist') 
        },
            ],
      }),
      new MiniCssExtractPlugin({
        filename: filename('css')

      })
    ],
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            MiniCssExtractPlugin.loader,  
            'css-loader',
            'sass-loader'
          ],
        },   
        { 
          test: /\.js$/, 
          exclude: /node_modules/, 
          loader: { 
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            } 
          }  
        }
      ]
    }
}
