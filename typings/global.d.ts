import { IpcRenderer } from 'electron'

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
  }
}

declare global {
  interface Window {
    /** 关闭预加载动画 */
    removeLoading: () => void
    ipcRenderer: IpcRenderer
  }
}

