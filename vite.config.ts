import { rmSync } from 'fs'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vite-plugin-electron'
import renderer from 'vite-plugin-electron/renderer'
import electronConfig, { useNodeJsInElectronRenderer } from './vite.config.electron'

rmSync('dist', { recursive: true, force: true }) // v14.14.0

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    electron(electronConfig),
    // Enable use Electron, Node.js API in Renderer-process
    renderer(),
    useNodeJsInElectronRenderer(),
  ],
})
