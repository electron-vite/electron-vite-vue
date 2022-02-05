import { builtinModules, createRequire } from 'module'
import { defineConfig } from 'vite'

const require = createRequire(import.meta.url)
const pkg = require('../package.json')

export default defineConfig({
  mode: process.env.NODE_ENV,
  // root: [path],
  build: {
    // outDir: [path],
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      fileName: () => '[name].cjs',
    },
    minify: process.env.NODE_ENV === 'production',
    emptyOutDir: true,
    rollupOptions: {
      external: [
        'electron',
        ...builtinModules,
        ...Object.keys(pkg.dependencies || {}),
      ],
    },
  },
})

/**
 * 2202-02-05
 * @todo process.env.NODE_ENV always return true, need to submit PR to vite and improvement vite:define plugin.
 */
