/**
 * Renderer and Main bridge
 */
import fs from 'fs'
import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('fs', fs)

contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer)
