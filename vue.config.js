module.exports = {
  // vue项目中关闭eslint
  lintOnSave: false,
  publicPath: './',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')]
      }
    }
  }
}