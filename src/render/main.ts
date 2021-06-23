import '@src/common/patch'
import { createApp } from 'vue'
import App from './App.vue'
import fs = require('fs')
import { ipcRenderer } from 'electron'
import Store from 'electron-store'
import './index.css'


setTimeout(() => {
  console.log('ipcRenderer:', ipcRenderer)
  // Configuration name causes hot updates to be slow | 传递 name 后会导致热更新很慢
  // console.log('electron-store', new Store({ name: 'electron-vue' })) 
  // https://github.com/caoxiemeihao/electron-vue-vite/issues/10
  console.log('electron-store', new Store())

  // new Store 会阻塞线程，导致 preload 动画卡顿
}, 2999)

createApp(App)
  .mount('#app')
  .$nextTick(window.removeLoading)
