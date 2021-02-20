const { ipcRenderer } = require('electron')
import { defineComponent } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { Popover } from 'ant-design-vue'
import { MenuOutlined } from '@ant-design/icons-vue'
import { routes } from '@/router'
import { event } from '@src/common/constant'
import useDevtools from '@/hooks/useDevtools'
import './sider.less'

export interface SiderMenu {
  title?: string
  icon?: JSX.Element | null
  path: string
  render?: Function
}

export default defineComponent({
  name: 'sider.tsx',
  setup(scope, { }) {
    const router = useRoute()
    const { ToolsComponent } = useDevtools()
    const menus: SiderMenu[] = routes
      .filter(r => r?.meta?.name)
      .map(r => ({
        title: r?.meta?.name,
        icon: r?.meta?.icon,
        path: r.path,
      }))
      .concat({
        title: '开发者工具',
        icon: null,
        path: '/devtools',
        render: () => <div
          class="w-100 d-flex justify-content-center"
          style={{ position: 'absolute', bottom: '50px' }}
        >
          <ToolsComponent layout="vertical" />
        </div>,
      } as any)
      .concat({
        title: '更多',
        path: '/setting',
        icon: <MenuOutlined />
      })

    return () => (
      <div class='sider-wrap'>
        {menus.map((menu) => {
          const { title, path, icon, render } = menu
          const setting = path === '/setting'
          const settingNode = (
            <Popover placement='rightBottom' content={
              <div class='setting-popover'>
                <div class='setting-item' onClick={() => {
                  ipcRenderer.invoke(event.LOGOUT)
                }}>退出</div>
              </div>
            }>
              {icon}
            </Popover>
          )
          const cls = [
            'menu-item',
            router.path === path ? 'active' : '',
            setting ? 'setting' : '',
          ]
          const node = setting ? settingNode : <RouterLink to={path}>{icon}</RouterLink>

          return (
            <div key={path} title={title} class={cls.join(' ')}>
              {render ? render(menu, node) : node}
            </div>)
        })}
      </div>
    )
  },
})
