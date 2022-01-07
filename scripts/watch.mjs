process.env.NODE_ENV = 'development'

import electron from 'electron'
import { spawn } from 'child_process'
import { createRequire } from 'module'
import { createServer, build as viteBuild } from 'vite'
import chalk from 'chalk'

const TAG = chalk.bgGreen(' dev.mjs ')
const require = createRequire(import.meta.url)
const pkg = require('../package.json')

/**
 * @param {{ name: string; configFile: string; writeBundle: import('rollup').OutputPlugin['writeBundle'] }} param0
 * @returns {import('rollup').RollupWatcher}
 */
function getWatcher({ name, configFile, writeBundle }) {
  return viteBuild({
    // Ensure `vite-main.config.ts` and `vite-preload.config.ts` correct `process.env.NODE_ENV`
    mode: process.env.NODE_ENV,
    // Options here precedence over configFile
    build: {
      watch: {},
    },
    configFile,
    plugins: [
      { name, writeBundle },
    ],
  })
}

/**
 * @returns {Promise<import('rollup').RollupWatcher>}
 */
async function watchMain() {
  /**
   * @type {import('child_process').ChildProcessWithoutNullStreams | null}
   */
  let electronProcess = null

  /**
   * @type {import('rollup').RollupWatcher}
   */
  const watcher = await getWatcher({
    name: 'electron-main-watcher',
    configFile: 'configs/vite-main.config.ts',
    writeBundle() {
      electronProcess && electronProcess.kill()
      electronProcess = spawn(electron, ['.'], {
        stdio: 'inherit',
        env: Object.assign(process.env, pkg.env),
      })
    },
  })

  return watcher
}

/**
 * @param {import('vite').ViteDevServer} viteDevServer
 * @returns {Promise<import('rollup').RollupWatcher>}
 */
async function watchPreload(viteDevServer) {
  return getWatcher({
    name: 'electron-preload-watcher',
    configFile: 'configs/vite-preload.config.ts',
    writeBundle() {
      viteDevServer.ws.send({
        type: 'full-reload',
      })
    },
  })
}

// bootstrap
const viteDevServer = await createServer({ configFile: 'configs/vite-renderer.config.ts' })

await viteDevServer.listen()
await watchPreload(viteDevServer)
await watchMain()
