import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { HomeOutlined, UserOutlined } from '@ant-design/icons-vue'

export interface RouteMeta {
  icon?: JSX.Element
  name?: string
}

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/pages/home'),
    meta: {
      icon: <HomeOutlined />,
      name: '首页',
    } as RouteMeta,
  },
  {
    path: '/login',
    component: () => import('@/pages/login'),
  },
  {
    path: '/about',
    component: () => import('@/pages/about'),
    meta: {
      icon: <UserOutlined />,
      name: '关于作者',
    } as RouteMeta,
  },
]

export default createRouter({
  routes,
  history: createWebHistory(),
})
