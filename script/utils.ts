import { get } from 'http'

/** 轮询监听 vite 启动 */
export function waitOn(arg0: { port: string | number; interval?: number; }) {
  return new Promise(resolve => {
    const { port, interval = 149 } = arg0
    let counter = 0
    const timer: NodeJS.Timer = setInterval(() => {
      get(`http://localhost:${port}`, res => {
        clearInterval(timer)
        console.log('[waitOn]', res.statusCode, res.statusMessage)
        resolve(res.statusCode)
      }).on('error', err => {
        console.log('[waitOn]', `counter:${counter++}`)
      })
    }, interval)
  })
}
