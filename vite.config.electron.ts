import { join } from 'path'
import { defineConfig } from 'vite-plugin-electron'

export default defineConfig({
  main: {
    entry: 'electron/main/index.ts',
    vite: {
      build: {
        sourcemap: false,
        outDir: 'dist/electron/main',
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
      }
    }
  },
})
