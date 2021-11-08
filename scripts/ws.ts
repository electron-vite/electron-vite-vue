/**
 * Hot reload from preload script during development
 */
import WebSocket from 'ws'
import chalk from 'chalk'
import pkg from '../package.json'

export interface CreateWsServerOptions {
  TAG: string
}

export function createWsServer(options: CreateWsServerOptions) {
  const { TAG } = options
  const port = pkg.env.PORT_WS
  const host = '127.0.0.1'
  const wss = new WebSocket.Server({ host, port })
  const wssObj: { wss: WebSocket.Server; instance: WebSocket | null } = { wss, instance: null }

  console.log(TAG, 'Wss run at - ' + chalk.yellow(`ws://${host}:${port}`))

  wss.on('connection', ws => {
    console.log(TAG, chalk.yellow(`wss.on('connection')`))

    wssObj.instance = ws
    ws.on('message', message => {
      console.log(TAG, `ws.on('message'):`, message.toString())
    })

    ws.send(formatWsSendData({ cmd: 'message', data: 'connected.' }))
  })

  wss.on('close', () => {
    console.log(TAG, chalk.gray(`wss.on('close')`))

    wssObj.instance = null
  })

  return wssObj
}

export function formatWsSendData(json: { cmd: string, data?: any }) {
  return JSON.stringify(json)
}
