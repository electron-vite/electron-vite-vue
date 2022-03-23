import { createApp } from 'vue'
import App from './App.vue'
import ipcRendererSample from './mainModules/ipcRendererSample'
import fsExample from './mainModules/builtinModuleSample'

createApp(App)
  .mount('#app')
  .$nextTick(() => {
    window.removeLoading()
    ipcRendererSample()
    fsExample()
  })
