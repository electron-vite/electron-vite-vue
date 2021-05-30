import { builtinModules } from 'module'
import { get } from 'http'
import { green } from 'chalk'

/** 轮询监听 vite 启动 */
export function waitOn(arg0: { port: string | number; interval?: number; }) {
  return new Promise(resolve => {
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
