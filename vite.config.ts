import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
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
      resolvers: [
        ElementPlusResolver(),//自动导入组件
        IconsResolver({ //自动导入图标组件
          prefix: 'Icon',
        }),
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
    }),
    Icons({
      autoInstall: true,
    }),
  ],
  resolve:{
    alias: {
      '@': resolve(__dirname,'src') //手动配置@符号匹配src路径
    }
  }
})
