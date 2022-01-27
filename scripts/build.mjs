process.env.NODE_ENV = 'production'

import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { build } from 'vite'
import chalk from 'chalk'

const __dirname = dirname(fileURLToPath(import.meta.url))
const TAG = chalk.bgBlue(' build.mjs ')

/**
 * @type {Record<string, import('vite').InlineConfig>}
 */
const viteConfigs = {
  main: {
    configFile: 'scripts/vite.config.mjs',
    root: join(__dirname, '../src/main'),
    build: {
      outDir: '../../dist/main',
    },
  },
  preload: {
    configFile: 'scripts/vite.config.mjs',
    root: join(__dirname, '../src/preload'),
    build: {
      outDir: '../../dist/preload',
    },
  },
  renderer: {
    configFile: 'src/renderer/vite.config.ts',
  },
}

async function buildElectron() {
  for (const [name, config] of Object.entries(viteConfigs)) {
    console.log(TAG, name)
    await build(config)
    console.log() // for beautiful log.
  }
}

// bootstrap
await buildElectron()
