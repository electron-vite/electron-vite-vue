
const { ipcRenderer } = require('electron')
import { useRoute, useRouter } from 'vue-router'
import { Tooltip } from 'ant-design-vue'
import {
  ControlOutlined,
  WindowsOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ReloadOutlined,
} from '@ant-design/icons-vue'
import { event } from '@src/common/constant'
import { ComponentProps } from './interface'
import './index.less'

export default () => {
  const route = useRoute()

  const Component = ({ layout }: ComponentProps) => {
    const router = useRouter()
    const placement: Record<string, any> = { placement: layout === 'vertical' ? 'right' : undefined }

    return (
      <div class="custom-devtool">
        <div class={['btn-group', 'd-flex', layout, layout === 'vertical' ? 'flex-column' : ''].join(' ')}>
          <Tooltip title="切换开发者工具" {...placement}>
            <ControlOutlined onClick={() => ipcRenderer.invoke(event.TOGGLE_DEVTOOLS)} />
          </Tooltip>
          <Tooltip title="首页" {...placement}>
            <WindowsOutlined onClick={() => router.push('/')} />
          </Tooltip>
          <ArrowLeftOutlined onClick={() => router.back()} />
          <ArrowRightOutlined onClick={() => history.forward()} />
          <ReloadOutlined onClick={() => window.location.reload(true)} />
        </div>
      </div>
    )
  }

  return {
    url: route.path,
    ToolsComponent: Component,
  }
}
