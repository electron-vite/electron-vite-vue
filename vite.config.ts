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
    '/@/': root,
  },
  optimizeDeps: {
    allowNodeBuiltins: ['electron-is-dev', 'electron-store', 'electron']
  },
}

export default config
