import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 8888,
    cors: true,// 允许跨域
    hmr: true,// 开启热更新
  },
  base: './', // 配合electron打包
})
