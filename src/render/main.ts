import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
// vite 会编译 import 的形式；所以 electron 及 node.js 内置模块用 require 形式
const { ipcRenderer } = require('electron')

console.log(ipcRenderer)

createApp(App as any).mount('#app')
