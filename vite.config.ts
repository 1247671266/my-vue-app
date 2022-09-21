import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components  from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import AutoImport from 'unplugin-auto-import/vite' // npm install unplugin-auto-import
import { resolve } from 'path' //npm install @types/node --save-dev

// https://vitejs.dev/config/
export default defineConfig({
  base:"./",
  plugins: [
    vue(),
    AutoImport({  //自动导入vue api
      imports:['vue','vue-router'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve:{
    alias: {
      '@': resolve(__dirname,'src') //手动配置@符号匹配src路径
    }
  }
})
