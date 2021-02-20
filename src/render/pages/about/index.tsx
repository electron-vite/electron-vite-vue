import { defineComponent } from 'vue'
import useDevtools from '@/hooks/useDevtools'

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
