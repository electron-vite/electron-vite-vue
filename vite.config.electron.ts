import { join } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vite-plugin-electron'
import resolve, { lib2esm } from 'vite-plugin-resolve'
import pkg from './package.json'

// @ts-ignore
const dependencies = Object.keys(pkg.dependencies || {})

const external = [
  'electron',
  ...builtinModules,
  // (🎯-①): For use Node.js package in Electron-Main, Preload-Script
  ...dependencies,
]

export default defineConfig({
  main: {
    entry: 'electron/main/index.ts',
    vite: {
      build: {
        sourcemap: false,
        outDir: 'dist/electron/main',
        rollupOptions: {
          external,
        },
      },
    },
  },
  preload: {
    input: {
      // You can configure multiple preload here
      splash: join(__dirname, 'electron/preload/splash.ts'),
    },
    vite: {
      build: {
        // For debug
        sourcemap: 'inline',
        outDir: 'dist/electron/preload',
        rollupOptions: {
          external,
        },
      }
    }
  },
})

/**
 * ## Why?
 * 
 * Many times, many people want to use the Node.js package in Electron-Renderer, but it may not work correctly in Vite by default.  
 * 有很多时候很多人想在 Electron-Renderer 中使用 Node.js 模块，但这在 Vite 可能无法正常的构建。  
 * 
 * e.g.  
 *   Let's use `serialport` as an example.  
 *   让我们使用 `serialport` 举个例子 🌰。  
 * 
 * ```js
 * // ❌ May not work correctly in Vite by default.
 * import serialport, { SerialPort, SerialPortMock } from 'serialport';
 * ```
 * 
 * At this time, we need to use `vite-plugin-resolve` to convert `serialport` to ensure that it works normally.  
 * 这时候我们需要使用 `vite-plugin-resolve` 转换 `serialport`，以确保它能正常工作。  
 * 
 * e.g.
 * 
 * ```js
 * // serialport
 * const _M_ = require('serialport');
 * const _D_ = _M_.default || _M_;
 * export { _D_ as default };
 * export const SerialPort = _M_.SerialPort;
 * export const SerialPortMock = _M_.SerialPortMock;
 * ```
 * 
 * Try to use again.
 * 
 * ```js
 * // ✅ This looks like nothing has changed, but it works normally after the `vite-plugin-resolve` converted.
 * import serialport, { SerialPort, SerialPortMock } from 'serialport';
 * ```
 * 
 * 🚧 It should be noted that the Node.js package, as a dependency of the project, should be placed in `dependencies`; Unless you konw how to build them with Vite.  
 * 需要注意的一点是，Node.js 模块作为项目的依赖，应该放到 `dependencies` 中；除非你知道如何使用 Vite 构建他们。  
 */
export function useNodeJsInElectronRenderer() {
  const entries = dependencies.reduce((memo, moduleId) => {
    const members = Object.keys(require(moduleId))
    const snippet_of_cjs2esm = lib2esm(
      // CJS lib name
      moduleId,
      // export memebers
      members,
      { format: 'cjs' },
    )
    return Object.assign(memo, { [moduleId]: snippet_of_cjs2esm })
  }, {} as Parameters<typeof resolve>[0])

  // (🎯-②): For use Node.js package in Electron-Renderer
  return resolve(entries)
}
