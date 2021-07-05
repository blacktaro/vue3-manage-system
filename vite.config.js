import { defineConfig } from 'vite' // defineConfig 帮手函数
import vue from '@vitejs/plugin-vue'
const path = require('path')
export default defineConfig({
  plugins: [vue()], // 配置需要使用的插件列表，这里将vue添加进去
  resolve: {
    // 别名配置
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: 'views',
        replacement: path.resolve(__dirname, 'src/views'),
      },
    ],
  },
  // 构建选项
  build: {
    outDir: 'dist', 
    assetsDir: 'assets', 
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/', //打包配置，解决页面空白的配置方案。
  },
  // 开发服务器选项
  server: {
    host: '0.0.0.0', // 默认是 localhost
    port: '8000', // 默认是 3000 端口
    open: true, // 浏览器自动打开
    https: false, // 是否开启 https
    ssr: false, // 服务端渲染
    proxy: {}, // 跨域代理
  },
})
