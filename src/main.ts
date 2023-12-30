import { createApp } from 'vue'
import App from './App.vue'

import './style.css'

// `nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'
// import './demos/ipc'

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
