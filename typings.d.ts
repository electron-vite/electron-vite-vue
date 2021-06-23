
declare const React: string
declare module '*.json'
declare module '*.png'
declare module '*.jpg'

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production'
  }
}

interface Window {
  /** 关闭预加载动画 */
  ClosePreloadLoading: () => void
}
