const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    port: 8888,
    host: "localhost",
    open: true,
    https: false,
    //配置跨域
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ''
        }
      }
      // "/dev-api": {
      //   target: "http://localhost:3000",
      //   changeOrigin: true,
      //   pathRewrite: {
      //     "^/dev-api": ''
      //   }
      // }
    }
  },
  lintOnSave: false
})
