import { h } from 'vue'
import { MessageOutlined } from '@ant-design/icons-vue'
import * as VueRouter from 'vue-router'
import { ItemType } from 'ant-design-vue'

export interface EditorMenuItem {
  path: string,
  icon?: any,
  label: string,
  component: () => Promise<any>,
}
const editorMenuItems: EditorMenuItem[] = [
  {
    path: '/',
    label: 'Home',
    component: () => import('@/pages/empty.vue'),
  },
  {
    path: '/drama',
    label: 'Drama',
    icon: h(MessageOutlined),
    component: () => import('@/pages/drama.vue')
  },
  {
    path: '/item',
    label: 'Item',
    component: () => import('@/pages/item.vue')
  }
]

export const routers = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: editorMenuItems
})


export const menuItems: ItemType[] = editorMenuItems.filter(item => item.path != '/')
  .map((item) => ({
    key: item.path,
    label: item.label,
    icon: item.icon
  }))
