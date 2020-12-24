declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

interface Window {
  /** 关闭预加载动画 */
 ClosePreloadLoading: () => void
}
