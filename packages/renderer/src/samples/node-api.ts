import { lstat } from 'fs'
import { cwd } from 'process'
import { ipcRenderer } from 'electron'

// Usage of ipcRenderer.on
ipcRenderer.on('main-process-message', (_event, ...args) => {
  console.log('[Receive Main-process message]:', ...args)
})

lstat(cwd(), (err, stats) => {
  if (err) {
    console.log(err)
  } else {
    console.log('[fs.lstat]', stats)
  }
})
