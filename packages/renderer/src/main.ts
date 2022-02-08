import { createApp } from 'vue'
import App from './App.vue'

createApp(App)
  .mount('#app')
  .$nextTick(window.removeLoading)

console.log('fs', window.fs)
console.log('ipcRenderer', window.ipcRenderer)
