const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.config');
const devConfig = require('./webpack.dev.config');
const proConfig = require('./webpack.pro.config');

let config = process.NODE_EVN === 'development' ? devConfig : proConfig;

module.exports = merge(baseConfig, config); // 使这些文件合并 npm i webpack-merge -D
