
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
    readonly HOST: string
    readonly PORT: string
    readonly PORT_WS: string
  }
}

interface Window {
  /** 关闭预加载动画 */
  removeLoading: () => void
  /** NodeJs fs */
  fs: typeof import('fs')
  /** Electron ipcRenderer */
  ipcRenderer: import('electron').IpcRenderer
}
