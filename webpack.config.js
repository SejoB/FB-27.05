const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const configuration = require('./webpack.config.js');
module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
     filename: 'dist/app.js'
 },
 devtool: 'source-map',
 module: {
     rules: [{
         test: /\.scss$/, 
         use: [{
             loader: "style-loader"
         }, {
             loader: "css-loader", options: {
                 sourceMap: true
             }
         }, {
             loader: "sass-loader", options: {
                 sourceMap: true
             }
         }]
     }]
 },
plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
]
};