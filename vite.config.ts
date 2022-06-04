import { rmSync } from 'fs'
import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron/renderer'

rmSync('dist', { recursive: true, force: true }) // v14.14.0

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'electron-main/index.ts',
        vite: {
          build: {
            sourcemap: false,
          },
        },
      },
      preload: {
        input: {
          // You can configure multiple preload here
          splash: join(__dirname, 'electron-preload/splash.ts'),
        },
        vite: {
          build: {
            // For debug
            sourcemap: 'inline',
          }
        },
      },
    }),
    // Enable use Electron, Node.js API in Renderer-process
    renderer(),
  ],
})
