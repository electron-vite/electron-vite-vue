import { join } from 'path'
import { builtinModules } from 'module'
import { defineConfig, Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import resolve from 'vite-plugin-resolve'
import pkg from '../package.json'

// https://vitejs.dev/config/
export default defineConfig({
  mode: process.env.NODE_ENV,
  root: join(__dirname, '../src/renderer'),
  plugins: [
    vue(),
    resolveElectron(
      /**
       * you can custom other module in here
       * 🚧 need to make sure custom-resolve-module in `dependencies`, that will ensure that the electron-builder can package them correctly
       * @example
       * {
       *   'electron-store': 'const Store = require("electron-store"); export defalut Store;',
       * }
       */
    ),
  ],
  base: './',
  build: {
    emptyOutDir: true,
    outDir: '../../dist/renderer',
  },
  server: {
    host: pkg.env.HOST,
    port: pkg.env.PORT,
  },
})

// ------- For use Electron, NodeJs in Renderer-process -------
// https://github.com/caoxiemeihao/electron-vue-vite/issues/52
export function resolveElectron(dict: Parameters<typeof resolve>[0] = {}): Plugin[] {
  const builtins = builtinModules.filter(t => !t.startsWith('_'))

  return [
    {
      name: 'vite-plugin-electron-config',
      config(config) {
        if (!config.optimizeDeps) config.optimizeDeps = {}
        if (!config.optimizeDeps.exclude) config.optimizeDeps.exclude = []

        config.optimizeDeps.exclude.push('electron', ...builtins)
      },
    },
    // https://github.com/caoxiemeihao/vite-plugins/tree/main/packages/resolve#readme
    resolve({
      electron: electronExport(),
      ...builtinModulesExport(builtins),
      ...dict,
    })
  ]

  function electronExport() {
    return `
  /**
   * All exports module see https://www.electronjs.org -> API -> Renderer Process Modules
   */
  const electron = require("electron");
  const {
    clipboard,
    nativeImage,
    shell,
    contextBridge,
    crashReporter,
    ipcRenderer,
    webFrame,
    desktopCapturer,
    deprecate,
  } = electron;
  
  export {
    electron as default,
    clipboard,
    nativeImage,
    shell,
    contextBridge,
    crashReporter,
    ipcRenderer,
    webFrame,
    desktopCapturer,
    deprecate,
  }
  `
  }

  function builtinModulesExport(modules: string[]) {
    return modules.map((moduleId) => {
      const nodeModule = require(moduleId)
      const attrs = Object.keys(nodeModule)
      const requireTpl = `const __builtinModule = require("${moduleId}");`
      const exportDefault = `export default __builtinModule`
      const exportTpl = attrs.map(attr => `export const ${attr} = __builtinModule.${attr}`).join(';\n') + ';'
      const nodeModuleCode = `
${requireTpl}

${exportDefault}

${exportTpl}
  `

      return { [moduleId]: nodeModuleCode }
    }).reduce((memo, item) => Object.assign(memo, item), {})
  }
}
