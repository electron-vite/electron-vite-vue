/**
 * 参考链接: https://github.com/vitejs/vite/blob/master/src/node/config.ts
 */
import { join } from 'path'
import { UserConfig } from 'vite'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '.env') })
const root = join(__dirname, 'src/render')

const config: UserConfig = {
  root,
  port: +process.env.PORT,
  base: './',
  outDir: join(__dirname, 'dist/render'),
  alias: {
    // 别名必须以 / 开头、结尾
    // '/@/': root, -- vite 内部在用，这里不能用了
    // '/root/': __dirname, -- vite 内部在用，这里不能用了
    '/assets/': join(__dirname, 'src/render/assets'),
    '/components/': join(__dirname, 'src/render/components'),
    '/lib/': join(__dirname, 'src/render/lib'),
    '/utils/': join(__dirname, 'src/render/utils'),
    '/views/': join(__dirname, 'src/render/views'),
  },
  optimizeDeps: {
    // 这里不加也没事，用 require 的形式就能避开 import 被编译成 /@modules/fs?import
    // allowNodeBuiltins: ['electron-is-dev', 'electron-store', 'electron']
  },
  rollupInputOptions: {
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
          if (filename.includes('/node_modules/')) {
            return code
          }

          const electronStoreReg = /(const|let|var)[\n\s]+(\w+)[\n\s]*=[\n\s]*require\(["|'](.+)["|']\)/g
          const res = code.match(electronStoreReg)
          if (res) {
            // const Store = require('electron-store') -> import Store from 'electron-store'
            code = code.replace(electronStoreReg, `import $2 from '$3'`)
          }
          return code
        },
      }
    ],
  },
  rollupOutputOptions: {
    format: 'commonjs',
  },
}

export default config
