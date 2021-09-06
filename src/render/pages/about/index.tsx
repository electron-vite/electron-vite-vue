import { defineComponent } from 'vue'
import useDevtools from '@/render/hooks/useDevtools'

export default defineComponent({
  setup() {
    const { ToolsComponent } = useDevtools()

    return () => (
      <div>
        About component
        <ToolsComponent />
      </div>
    )
  }
})
