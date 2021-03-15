import { defineComponent, } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Layout, Menu } from 'ant-design-vue'
import Sider from './sider'
import logo from '@/assets/logo.png'
import './index.less'

export default defineComponent({
  name: 'laouts.tsx',
  setup(_, ctx) {

    return () => (
      <Layout class='app-layout h-100'>
        <Layout.Sider width={52}>
          <Sider />
        </Layout.Sider>
        <Layout.Content>
          {/* 奇怪的写法: https://github.com/vuejs/composition-api/issues/84 */}
          {ctx?.slots?.default?.()}
        </Layout.Content>
      </Layout>
    )
  },
})
