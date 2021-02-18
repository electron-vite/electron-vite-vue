import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import AppLayout from '@/layout'

export default defineComponent({
  setup() {
    return () => (
      <AppLayout>
        <RouterView />
      </AppLayout>
    )
  },
})
