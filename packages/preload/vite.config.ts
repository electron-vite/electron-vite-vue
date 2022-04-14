import { join } from 'path'
import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import pkg from '../../package.json'

export default defineConfig({
  root: __dirname,
  build: {
    outDir: '../../dist/preload',
    emptyOutDir: true,
    minify: process.env./* from mode option */NODE_ENV === 'production',
    // https://github.com/caoxiemeihao/electron-vue-vite/issues/61
    sourcemap: 'inline',
    rollupOptions: {
      input: {
        // multiple entry
        index: join(__dirname, 'index.ts'),
      },
      output: {
        format: 'cjs',
        entryFileNames: '[name].cjs',
        manualChunks: {},
      },
      external: [
        'electron',
        ...builtinModules,
        // @ts-ignore
        ...Object.keys(pkg.dependencies || {}),
      ],
    },
  },
})
