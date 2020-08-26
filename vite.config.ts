/**
 * 参考链接: https://github.com/vitejs/vite/blob/master/src/node/config.ts
 */
import { join } from 'path'
import { UserConfig } from 'vite'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '.env') })

const config: UserConfig = {
  root: join(__dirname, 'src/render'),
  port: +process.env.PORT,
  base: './',
}

export default config
