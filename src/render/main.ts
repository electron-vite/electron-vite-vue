import { createApp } from 'vue'
import App from './App'
import router from './router'

import 'ant-design-vue/es/style/index.less'
import '@/render/assets/style/bootstrap-5.0.2.less'
import './global.less'

createApp(App)
  .use(router)
  .mount('#app')
  .$nextTick(window.removeLoading)
