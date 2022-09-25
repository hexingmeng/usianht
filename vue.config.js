const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  // publicPath: "./",
  devServer: {
    // 端口号
    port: 8888,
    // 主机名
    host: "localhost",
    // 项目启动时是否自动开启浏览器
    open: true,
    // 是否开启https
    https: false,
    // 配置跨域
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.Vue_APP_SERVICE_URL,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: "",
        },
      },
    },
  },
  lintOnSave: false,
});
