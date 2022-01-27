process.env.NODE_ENV = 'development'

import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import { createRequire } from 'module'
import { spawn } from 'child_process'
import { createServer, build } from 'vite'
import electron from 'electron'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(import.meta.url)
const pkg = require('../package.json')

/**
 * @type {() => Promise<import('rollup').RollupWatcher>}
 */
function watchMain() {
  /**
   * @type {import('child_process').ChildProcessWithoutNullStreams | null}
   */
  let electronProcess = null

  return build({
    configFile: 'scripts/vite.config.mjs',
    root: join(__dirname, '../src/main'),
    build: {
      outDir: '../../dist/main',
    },
    plugins: [{
      name: 'electron-main-watcher',
      writeBundle() {
        electronProcess && electronProcess.kill()
        electronProcess = spawn(electron, ['.'], {
          stdio: 'inherit',
          env: Object.assign(process.env, pkg.env),
        })
      },
    }],
  })
}

/**
 * @type {(server: import('vite').ViteDevServer) => Promise<import('rollup').RollupWatcher>}
 */
function watchPreload(server) {
  return build({
    configFile: 'scripts/vite.config.mjs',
    root: join(__dirname, '../src/preload'),
    build: {
      outDir: '../../dist/preload',
    },
    plugins: [{
      name: 'electron-preload-watcher',
      writeBundle() {
        server.ws.send({ type: 'full-reload' })
      },
    }],
  })
}

// bootstrap
const server = await createServer({ configFile: 'src/renderer/vite.config.ts' })

await server.listen()
await watchPreload(server)
await watchMain()
