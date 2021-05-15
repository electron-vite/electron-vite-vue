require('dotenv').config({ path: join(__dirname, '.env') })

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
// import typescript from '@rollup/plugin-typescript'
import { builtins, ensureCwdCrrect } from './script/utils'

const root = join(__dirname, 'src/render')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root,
  base: './', // index.html 中静态资源加载位置
  server: {
    port: +process.env.PORT,
  },
  resolve: {
    alias: {
      '@': join(__dirname, 'src/render'),
      '@root': __dirname,
    },
  },
  build: {
    outDir: join(__dirname, 'dist/render'),
    emptyOutDir: true,
    minify: false,
    commonjsOptions: {},
    assetsDir: '', // 相对路径 加载问题
    sourcemap: true,
    rollupOptions: {
      plugins: [
        // typescript({ module: 'ESNext' }),
        // ensureCwdCrrect(join(root, 'main.ts')),
      ],
      external: [
        ...builtins(),
        'electron',
      ],
      output: {
        format: 'cjs',
      },
    },
  },
})
