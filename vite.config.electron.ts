import { join } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vite-plugin-electron'
import resolve, { lib2esm } from 'vite-plugin-resolve'
import pkg from './package.json'

const external = [
  'electron',
  ...builtinModules,
  // @ts-ignore
  // For use Node.js package in Electron-main, Preload-script
  ...Object.keys(pkg.dependencies || {}),
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

export function useNodeJsInElectronRenderer() {
  return resolve(
    /**
     * Here you can specify other modules
     * 🚧 You have to make sure that your module is in `dependencies` and not in the` devDependencies`,
     *    which will ensure that the electron-builder can package it correctly
     */
    {
      // If you use the following modules, the following configuration will work
      // What they have in common is that they will return - ESM format code snippets

      // ESM format string
      'electron-store': 'export default require("electron-store");',
      // Use lib2esm() to easy to convert ESM
      // Equivalent to
      /**
       * sqlite3: () => `
       * const _M_ = require('sqlite3');
       * const _D_ = _M_.default || _M_;
       * export { _D_ as default }
       * `
       */
      sqlite3: lib2esm('sqlite3', { format: 'cjs' }),
      serialport: lib2esm(
        // CJS lib name
        'serialport',
        // export memebers
        [
          'SerialPort',
          'SerialPortMock',
        ],
        { format: 'cjs' },
      ),
    }
  )
}
