require('dotenv').config({ path: join(__dirname, '.env') })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import externals from 'rollup-plugin-node-externals'
import { join } from 'path'
import { cjs2esm } from './script/utils'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({ /* options are passed on to @vue/babel-plugin-jsx */ }),
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
  optimizeDeps: {
    // exclude: ['electron-store', 'electron'],
  },
  build: {
    outDir: join(__dirname, 'dist/render'),
    sourcemap: true,
    minify: false,
    rollupOptions: {
      external: ['electron'],
      plugins: [
        // externals(), 会使打包后的代码里面含有 import 语句；导致报错跑不起来
        // cjs2esm(),
      ],
    },
  },
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment',
    // jsxInject: `import { h } from 'vue'`, 通过 @vitejs/plugin-vue-jsx 解决
  },
})
