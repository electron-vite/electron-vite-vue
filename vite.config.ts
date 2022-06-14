import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron/renderer'
import polyfillExports from 'vite-plugin-electron/polyfill-exports'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'electron-main/index.ts',
      },
      preload: {
        input: {
          // You can configure multiple preload here
          p1: join(__dirname, 'electron-preload'),
        },
      },
    }),
    // Enable use Electron, Node.js API in Renderer-process
    renderer(),
    // TODO: integrate into 'vite-plugin-electron' by default
    polyfillExports(),
  ],
})
