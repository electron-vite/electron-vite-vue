import { builtinModules } from 'module'
import { get } from 'http'
import chalk from 'chalk'

const TAG = '[waitOn]'

/** Listen http server startup */
export function waitOn(arg0: { port: string | number; interval?: number; }) {
  return new Promise<number | undefined>(resolve => {
    const { port, interval = 149 } = arg0
    const url = `http://localhost:${port}`
    let counter = 0
    const timer: NodeJS.Timer = setInterval(() => {
      get(url, res => {
        clearInterval(timer)
        console.log(TAG, chalk.green(`"${url}" are already responsive.`), `(${res.statusCode}: ${res.statusMessage})`)
        resolve(res.statusCode)
      }).on('error', err => {
        console.log(TAG, `counter: ${counter++}`)
      })
    }, interval)
  })
}

/** node.js builtins module */
export const builtins = () => builtinModules.filter(x => !/^_|^(internal|v8|node-inspect)\/|\//.test(x))
