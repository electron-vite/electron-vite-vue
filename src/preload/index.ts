import fs from 'fs'
import { contextBridge, ipcRenderer } from 'electron'
import { domReady, injectWsCode } from './utils'
import { useLoading } from './loading'

const isDev = process.env.NODE_ENV === 'development'
const { removeLoading, appendLoading } = useLoading()

domReady().then(() => {
  appendLoading()
  isDev && injectWsCode({
    host: '127.0.0.1',
    port: process.env.PORT_WS as string, // process.env.npm_package_env_PORT_WS
  })
})


// --------- Expose some API to Renderer process. ---------
contextBridge.exposeInMainWorld('fs', fs)
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer)
contextBridge.exposeInMainWorld('removeLoading', removeLoading)
