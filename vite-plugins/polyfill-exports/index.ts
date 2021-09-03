import { Plugin as VitePlugin } from 'vite'

export function polyfillExports(): VitePlugin {
  return {
    name: 'cxmh:vite-polyfill-exports',
    transformIndexHtml: (html) => html.replace('<head>', `<head>
  <script>const exports = module.exports;</script>`),
  }
}
