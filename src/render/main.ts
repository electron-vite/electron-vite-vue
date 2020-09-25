import { createApp } from 'vue'
import App from './App.vue'
// vite 会编译 import 的形式；所以 electron 及 node.js 内置模块用 require 形式
const { ipcRenderer } = require('electron')
import store from '/utils/store'

import './index.css'

console.log('ipcRenderer:', ipcRenderer)
console.log('Store', store)

createApp(App as any).mount('#app')
