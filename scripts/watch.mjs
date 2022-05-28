import { spawn } from 'child_process'
import { createServer, build } from 'vite'
import electron from 'electron'
import readline from 'readline'

const query = new URLSearchParams(import.meta.url.split('?')[1])
const debug = query.has('debug')

/** The log will display on the next screen */
function clearConsole() {
  const blank = '\n'.repeat(process.stdout.rows)
  console.log(blank)
  readline.cursorTo(process.stdout, 0, 0)
  readline.clearScreenDown(process.stdout)
}

/**
 * @type {(server: import('vite').ViteDevServer) => Promise<import('rollup').RollupWatcher>}
 */
function watchMain(server) {
  /**
   * @type {import('child_process').ChildProcessWithoutNullStreams | null}
   */
  let electronProcess = null
  const address = server.httpServer.address()
  const env = Object.assign(process.env, {
    VITE_DEV_SERVER_HOST: address.address,
    VITE_DEV_SERVER_PORT: address.port,
  })

  /**
   * @type {import('vite').Plugin}
   */
  const startElectron = {
    name: 'electron-main-watcher',
    writeBundle() {
      clearConsole()

      if (electronProcess) {
        electronProcess.removeAllListeners()
        electronProcess.kill()
      }

      electronProcess = spawn(electron, ['.'], { env })
      electronProcess.once('exit', process.exit)
      // https://github.com/electron-vite/electron-vite-vue/pull/129
      electronProcess.stdout.on('data', (data) => {
        const str = data.toString().trim()
        str && console.log(str)
      })
      electronProcess.stderr.on('data', (data) => {
        const str = data.toString().trim()
        str && console.error(str)
      })
    },
  }

  return build({
    configFile: 'packages/main/vite.config.ts',
    mode: 'development',
    plugins: [!debug && startElectron].filter(Boolean),
    build: {
      watch: {},
    },
  })
}

/**
 * @type {(server: import('vite').ViteDevServer) => Promise<import('rollup').RollupWatcher>}
 */
function watchPreload(server) {
  return build({
    configFile: 'packages/preload/vite.config.ts',
    mode: 'development',
    plugins: [{
      name: 'electron-preload-watcher',
      writeBundle() {
        clearConsole()
        server.ws.send({ type: 'full-reload' })
      },
    }],
    build: {
      watch: {},
    },
  })
}

// Block the CTRL + C shortcut on a Windows terminal and exit the application without displaying a query
if (process.platform === 'win32') {
  readline.createInterface({ input: process.stdin, output: process.stdout }).on('SIGINT', process.exit)
}

// bootstrap
const server = await createServer({ configFile: 'packages/renderer/vite.config.ts' })

await server.listen()
await watchPreload(server)
await watchMain(server)
