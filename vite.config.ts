require('dotenv').config({ path: path.join(__dirname, '.env') })

import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {
  external,
  polyfillExports,
} from './vite-plugins'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx({/* options are passed on to @vue/babel-plugin-jsx */ }),
    external(),
    polyfillExports(),
  ],
  root: path.join(__dirname, 'src/render'),
  base: './', // index.html 中静态资源加载位置
  server: {
    port: +process.env.PORT,
  },
  resolve: {
    alias: {
      '@root': __dirname,
      '@': path.join(__dirname, 'src'),
    },
  },
  build: {
    outDir: path.join(__dirname, 'dist/render'),
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
