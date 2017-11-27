const webpack = require('webpack');
const merge = require('webpack-merge');

var BabelPlugin = require('babel-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    plugins: [
        new BabelPlugin({
            test: /\.js$/,
            presets: ['es2015'],
            sourceMaps: false,
            compact: false
        }),
        new UglifyJSPlugin(),
        new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('production') } })
    ]
});