import { createApp } from 'vue'
import App from './App'
import router from './router'

// vite 会编译 import 的形式；所以 electron 及 node.js 内置模块用 require 形式
const fs = require('fs')
const { ipcRenderer} = require('electron')
// const Store = require('electron-store')

import 'ant-design-vue/dist/antd.css'
import '@/assets/style/boot4-part.less'
import './index.less'

console.log('fs', fs)
console.log('ipcRenderer:', ipcRenderer)
// console.log('electron-store', new Store())

createApp(App)
  .use(router)
  .mount('#app')
  .$nextTick(window.ClosePreloadLoading)
