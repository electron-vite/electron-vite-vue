import { createApp } from 'vue'
import App from './App'
import router from './router'

import '@/render/assets/style/boot4-part.less'
import './index.less'

createApp(App)
  .use(router)
  .mount('#app')
  .$nextTick(window.removeLoading)
