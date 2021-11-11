
export { }

declare global {
  interface Window {
    /** Expose some Api through preload script */
    bridge: {
      fs: typeof import('fs')
      ipcRenderer: import('electron').IpcRenderer
      removeLoading: () => void
    }
  }
}
