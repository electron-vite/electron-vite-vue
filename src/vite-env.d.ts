/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface Window {
  app: {
    // Expose in the `electron/preload/index.ts`
    onEvent: (cb: (channel: string, ...args: any[]) => void) => void
  }
}
