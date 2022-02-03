process.env.NODE_ENV = 'production'

import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

await build({
  configFile: 'scripts/vite.config.mjs',
  root: join(__dirname, '../src/main'),
  build: {
    outDir: '../../dist/main',
  },
})

await build({
  configFile: 'scripts/vite.config.mjs',
  root: join(__dirname, '../src/preload'),
  build: {
    outDir: '../../dist/preload',
  },
})

await build({ configFile: 'src/renderer/vite.config.ts' })
