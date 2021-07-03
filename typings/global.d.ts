
declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production'
  }
}

interface Window {
  /** 关闭预加载动画 */
  removeLoading: () => void
}
