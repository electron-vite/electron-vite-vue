import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue'

export interface RouteMeta {
  icon?: JSX.Element
  name?: string
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/render/pages/home'),
    meta: {
      icon: <HomeOutlined />,
      name: '首页',
    },
  },
  {
    path: '/login',
    component: () => import('@/render/pages/login'),
  },
  {
    path: '/about',
    component: () => import('@/render/pages/about'),
    meta: {
      icon: <UserOutlined />,
      name: '关于作者',
    },
  },
]

export default createRouter({
  routes,
  history: createWebHashHistory(), // 这里使用 hash 模式，确保打包后正常加载
})
