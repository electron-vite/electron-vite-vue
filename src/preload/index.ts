import fs from 'fs'
import { contextBridge, ipcRenderer } from 'electron'
import { domReady } from './utils'
import { useLoading } from './loading'

const isDev = process.env.NODE_ENV === 'development'
const { removeLoading, appendLoading } = useLoading()

domReady().then(() => {
  appendLoading()
})


// --------- Expose some API to Renderer process. ---------
contextBridge.exposeInMainWorld('fs', fs)
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer)
contextBridge.exposeInMainWorld('removeLoading', removeLoading)
