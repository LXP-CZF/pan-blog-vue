module.exports = {
    publicPath: './',
    outputDir: './dist',
    assetsDir: 'assets',
    devServer: {
      proxy: {
        '/users': {
          target: 'http://127.0.0.1:3000', // 用户登录
          ws: true,
          changeOrigin: true,
          secure: true
        }
      }
    }
  }
  