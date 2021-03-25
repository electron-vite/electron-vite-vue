import { sep } from 'path'
import { get } from 'http'
import { green } from 'chalk'

/** 轮询监听 vite 启动 */
export function waitOn(arg0: { port: string | number; interval?: number; }) {
  return new Promise(resolve => {
    const { port, interval = 449 } = arg0
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

/** cjs2esm */
function _cjs2esm() {
  return {
    name: '@rollup/plugin-cjs2esm',
    transform(code: string, filename: string) {
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
}

/**
 * cjs2esm
 * 参考: https://mp.weixin.qq.com/s/SlXIjnwbHS_enHXlZAnMMw
 */
export function cjs2esm() {

}