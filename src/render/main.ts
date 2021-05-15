/**
 * !!! ensure cwd crrect
 */
process.chdir(__dirname)

import { createApp } from 'vue'
import App from './App.vue'
import fs = require('fs')
import { ipcRenderer } from 'electron'
import Store from 'electron-store'
import './index.css'

console.log('fs', fs)
console.log('ipcRenderer:', ipcRenderer)
console.log('electron-store', new Store({ name: 'electron-vue' }))

createApp(App)
  .mount('#app')
  .$nextTick(window.ClosePreloadLoading)
