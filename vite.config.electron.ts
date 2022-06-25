import { join } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vite-plugin-electron'
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
