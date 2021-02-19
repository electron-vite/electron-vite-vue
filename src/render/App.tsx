import { defineComponent } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppLayout from '@/layout'

export default defineComponent({
  setup() {
    const route = useRoute()

    return () => route.path === '/login'
      ? <RouterView />
      : <AppLayout>
        <RouterView />
      </AppLayout>
  },
})
