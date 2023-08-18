import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import STable from '@surely-vue/table';
import "./style.css"
import App from './App.vue'
import { routers } from '@/router'
import './samples/node-api'
import 'ant-design-vue/dist/reset.css';

const pina = createPinia()
const app = createApp(App)

app.use(Antd)
app.use(pina)
app.use(routers)
app.use(STable)
app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })

