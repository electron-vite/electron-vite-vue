require('dotenv').config({ path: join(__dirname, '.env') })

import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import electron from 'vitejs-plugin-electron'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({ /* options are passed on to @vue/babel-plugin-jsx */ }),
    electron(),
  ],
  root: join(__dirname, 'src/render'),
  base: './', // index.html 中静态资源加载位置
  server: {
    port: +process.env.PORT,
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src/render'),
      '@src': join(__dirname, 'src'),
      '@root': __dirname,
    },
  },
  build: {
    outDir: join(__dirname, 'dist/render'),
    sourcemap: true,
    minify: false,
    assetsDir: '', // 相对路径 加载问题
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    // jsxInject: `import { h } from 'vue'`, 通过 @vitejs/plugin-vue-jsx 解决
  },
})
