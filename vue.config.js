'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}


const postcssConfig = require('./postcss.config.js')
module.exports = {
  // vue项目中关闭eslint
  lintOnSave: false,
  publicPath: './',
  configureWebpack: {
    name: 'fuint会员营销管理系统',
    resolve: {
      alias: {
        '@': resolve('src')
      },
      fallback: {
        "path": require.resolve("path-browserify")
      }
    },
  },
  chainWebpack: config => {
    config.module
      .rule('css')
      .oneOf('vue')
      .use('postcss-loader')
      .tap(options => {
        options.postcssOptions = postcssConfig.plugins
        return options
      })
  },
}