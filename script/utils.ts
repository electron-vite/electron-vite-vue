import fs from 'fs'
import path from 'path'
import { builtinModules } from 'module'
import { get } from 'http'
import { green } from 'chalk'
import { Plugin } from 'rollup'
import { parse as parseEnv } from 'dotenv'

/** 轮询监听 vite 启动 */
export function waitOn(arg0: { port: string | number; interval?: number; }) {
  return new Promise<number | undefined>(resolve => {
    const { port, interval = 149 } = arg0
    const url = `http://localhost:${port}`
    let counter = 0
    const timer: NodeJS.Timer = setInterval(() => {
      get(url, res => {
        clearInterval(timer)
        console.log('[waitOn]', green(`"${url}" are already responsive.`), `(${res.statusCode}: ${res.statusMessage})`)
        resolve(res.statusCode)
      }).on('error', err => {
        console.log('[waitOn]', `counter: ${counter++}`)
      })
    }, interval)
  })
}

/** node.js builtins module */
export const builtins = () => builtinModules.filter(x => !/^_|^(internal|v8|node-inspect)\/|\//.test(x))

/**
 * @todo
 * typescript with esbuild
 */
export function typescript(): Plugin {
  return {
    name: 'cxmh:rollup-typescript-esbuild',
  }
}

export function getEnv(): Record<string, string> {
  try {
    if (getEnv.env) {
      return getEnv.env
    }
    const env = parseEnv(fs.readFileSync(path.join(process.cwd(), '.env')))
    return getEnv.env = env
  } catch (error) {
    return {}
  }
}
getEnv.env = undefined as (Record<string, string> | undefined) // Just fix ts check
