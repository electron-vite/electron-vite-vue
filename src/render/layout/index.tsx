import { defineComponent, watch, ref } from 'vue'
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { Layout, Menu } from 'ant-design-vue'
import { routes } from '@/router'
import './index.less'
import logo from '@/assets/logo.png'

export default defineComponent({
  setup(_, ctx) {
    const route = useRoute()
    const router = useRouter()
    const refMenu = ref<HTMLDivElement>()

    // active 与 class="ant-menu-item-selected" 在 Menu 组件上会被忽略，用 DOM 操作实现高亮
    const activeMenu = (p?: string) => {
      const aLi = refMenu.value!.querySelectorAll<HTMLLIElement>('.ant-menu-item')
      for (const oLi of aLi) {
        if (oLi.dataset.path === (p || route.path)) {
          oLi.classList.toggle('ant-menu-item-selected')
          break
        }
      }
    }

    const stop = watch(
      () => route.path,
      (path, prevPath) => {
        activeMenu(path)
        stop() // 只执行一次
      },
    )

    return () => (
      <Layout class="app-layout">
        <Layout.Sider class="layout-sider" theme="light">
          <div
            class="logo d-flex align-items-center p-2 shadow-header"
            style={{ position: 'relative', zIndex: 1, }}
          >
            <img src={logo} class="h-100 cursor-pointer" onClick={() => router.push('/')} />
            <span class="ml-3"></span>
          </div>
          <div ref={refMenu}>
            <Menu>
              {routes.map(r => r.meta?.name ?
                <Menu.Item
                  key={r.path}
                  active={r.path === route.path} // 会被忽略
                  class="ant-menu-item-selected" // 会被忽略
                  data-path={r.path}
                >
                  <RouterLink to={r.path}>
                    {r.meta.icon}
                    {r.meta.name}
                  </RouterLink>
                </Menu.Item>
                : null)}
            </Menu>
          </div>
        </Layout.Sider>
        <Layout>
          <Layout.Header
            class="layout-header shadow-header"
            style={{
              position: 'relative',
              backgroundColor: 'white',
              zIndex: 1,
            }}
          >
            {/*  */}
          </Layout.Header>
          <Layout.Content class="layout-content">
            {/* 奇怪的写法: https://github.com/vuejs/composition-api/issues/84 */}
            {ctx?.slots?.default()}
          </Layout.Content>
        </Layout>
      </Layout>
    )
  },
})
