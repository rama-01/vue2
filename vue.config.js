const postcssConfig = require('./postcss.config.js')
module.exports = {
  // vue项目中关闭eslint
  lintOnSave: false,
  publicPath: './',
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