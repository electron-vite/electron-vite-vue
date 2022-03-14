import {ipcRenderer} from 'electron' // rename from cjs to esm by plugin `resolveElectron` in packages/renderer/vite.config.ts

const ipcRendererHelloWorld = () => {
  // Usage of ipcRenderer.on
  ipcRenderer.on('main-process-message', (_event, ...args) => {
    console.log('[Receive Main-process message]:', ...args)
  })
}
export default ipcRendererHelloWorld
