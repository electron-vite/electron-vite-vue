import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join, sep } from 'path'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '.env') })
const root = join(__dirname, 'src/render')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  root,
  // base: './',
  server: {
    port: +process.env.PORT,
  },
  resolve: {
    alias: {
      '@root': __dirname,
      '@assets': join(__dirname, 'src/render/assets'),
      '@components': join(__dirname, 'src/render/components'),
      '@lib': join(__dirname, 'src/render/lib'),
      '@utils': join(__dirname, 'src/render/utils'),
      '@views': join(__dirname, 'src/render/views'),
    },
  },
  optimizeDeps: {
    // 这里不加也没事，用 require 的形式就能避开 import 被编译成 /@modules/fs?import
    // allowNodeBuiltins: ['electron-is-dev', 'electron-store', 'electron']
  },
  build: {
    outDir: join(__dirname, 'dist/render'),
    rollupOptions: {
      output: {
        // format: 'commonjs',
      },
      external: [
        'crypto',
        'assert',
        'fs',
        'util',
        'os',
        'events',
        'child_process',
        'http',
        'https',
        'path',
        'electron',
      ],
      plugins: [
        {
          name: '@rollup/plugin-cjs2esm',
          transform(code, filename) {
            if (filename.includes(`${sep}node_modules${sep}`)) {
              return code
            }

            const cjsRegexp = /(const|let|var)[\n\s]+(\w+)[\n\s]*=[\n\s]*require\(["|'](.+)["|']\)/g
            const res = code.match(cjsRegexp)
            if (res) {
              // const Store = require('electron-store') -> import Store from 'electron-store'
              code = code.replace(cjsRegexp, `import $2 from '$3'`)
            }
            return code
          },
        }
      ],
    },
  },
})

