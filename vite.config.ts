import { existsSync, rmSync } from 'fs'
import { join } from 'path'
import { defineConfig, Plugin, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import pkg from './package.json'

rmSync('dist', { recursive: true, force: true }) // v14.14.0

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron({
      main: {
        entry: 'electron/main/index.ts',
        vite: withDebug({
          build: {
            outDir: 'dist/electron/main',
          },
        }),
      },
      preload: {
        input: {
          // You can configure multiple preload here
          index: join(__dirname, 'electron/preload/index.ts'),
        },
        vite: {
          build: {
            // For Debug
            sourcemap: 'inline',
            outDir: 'dist/electron/preload',
          },
        },
      },
      // Enables use of Node.js API in the Renderer-process
      renderer: {},
    }),
  ],
  server: {
    host: pkg.env.VITE_DEV_SERVER_HOST,
    port: pkg.env.VITE_DEV_SERVER_PORT,
  },
})

function withDebug(config: UserConfig): UserConfig {
  const DebugFile = join(__dirname, 'node_modules/.electron-vite-debug')
  const isDebug = existsSync(DebugFile)

  if (isDebug) {
    config.build.sourcemap = true
    config.plugins = (config.plugins || []).concat({
      name: 'electron-vite-debug',
      configResolved(config) {
        const index = config.plugins.findIndex(p => p.name === 'electron-main-watcher');
        (config.plugins as Plugin[]).splice(index, 1)
        rmSync(DebugFile)
      },
    })
  }

  return config
}
