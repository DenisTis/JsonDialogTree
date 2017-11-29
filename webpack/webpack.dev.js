const merge = require('webpack-merge');
const common = require('./webpack.common.js');
module.exports = merge(common, 
  { 
    devtool: 'inline-source-map',
    devServer: {
      port: 8081,
      publicPath: '/',
      historyApiFallback: true
    },
  }
  );
