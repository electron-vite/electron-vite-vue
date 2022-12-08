import { rmSync } from 'fs'
import {
  type Plugin,
  defineConfig,
  loadEnv,
} from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron-renderer'
import pkg from './package.json'

rmSync('dist-electron', { recursive: true, force: true })
const sourcemap = !!process.env.VSCODE_DEBUG
const isBuild = process.argv.slice(2).includes('build')

// Load .env
function loadEnvPlugin(): Plugin {
  return {
    name: 'vite-plugin-load-env',
    config(config, env) {
      const root = config.root ?? process.cwd()
      const result = loadEnv(env.mode, root)
      // Remove the vite-plugin-electron injected env.
      delete result.VITE_DEV_SERVER_URL
      config.esbuild ??= {}
      config.esbuild.define = {
        ...config.esbuild.define,
        ...Object.fromEntries(Object.entries(result)
          .map(([key, val]) => [`process.env.${key}`, JSON.stringify(val)])),
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron([
      {
        // Main-Process entry file of the Electron App.
        entry: 'electron/main/index.ts',
        onstart(options) {
          if (process.env.VSCODE_DEBUG) {
            console.log(/* For `.vscode/.debug.script.mjs` */'[startup] Electron App')
          } else {
            options.startup()
          }
        },
        vite: {
          build: {
            sourcemap,
            minify: isBuild,
            outDir: 'dist-electron/main',
            rollupOptions: {
              external: Object.keys(pkg.dependencies),
            },
          },
          plugins: [loadEnvPlugin()],
        },
      },
      {
        entry: 'electron/preload/index.ts',
        onstart(options) {
          // Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete, 
          // instead of restarting the entire Electron App.
          options.reload()
        },
        vite: {
          build: {
            sourcemap,
            minify: isBuild,
            outDir: 'dist-electron/preload',
            rollupOptions: {
              external: Object.keys(pkg.dependencies),
            },
          },
        },
      }
    ]),
    // Use Node.js API in the Renderer-process
    renderer({
      nodeIntegration: true,
    }),
  ],
  server: process.env.VSCODE_DEBUG ? (() => {
    const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL)
    return {
      host: url.hostname,
      port: +url.port,
    }
  })() : undefined,
  clearScreen: false,
})
