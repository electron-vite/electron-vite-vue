/**
 * Renderer and Main bridge
 * @refresh https://newbedev.com/how-to-use-preload-js-properly-in-electron
 */
 import { contextBridge, ipcRenderer } from 'electron'

 contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer)
 