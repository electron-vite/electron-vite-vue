import { watch, rollup, OutputOptions, Plugin } from 'rollup'
import minimist from 'minimist'
import chalk from 'chalk'
import ora from 'ora'
import WebSocket from 'ws'
import options from './rollup.config'
import { createWsServer, formatWsSendData, WssServer } from './ws'

const argv = minimist(process.argv.slice(2))
const opts = options({ proc: 'preload', env: argv.env })
const TAG = '[build-preload.ts]'
const spinner = ora(`${TAG} Electron preload build...`)

function hotReloadPreload(wssServer: WssServer): Plugin {
  return {
    name: 'hot-reload-preload',
    writeBundle() {
      // Hot reload preload script !!!
      if (wssServer.instance?.readyState === WebSocket.OPEN) {
        console.log(TAG, 'Hot reload preload script')
        wssServer.instance.send(formatWsSendData({ cmd: 'reload', data: Date.now() }))
      }
    },
  }
}

; (async () => {
  if (argv.watch) {
    const wssServer = createWsServer()
    opts.plugins = opts.plugins?.concat(hotReloadPreload(wssServer))
    const watcher = watch(opts)

    watcher.on('change', filename => {
      console.log(TAG, chalk.yellow(`change -- ${filename}`))
    })
  } else {
    spinner.start()
    try {
      const build = await rollup(opts)
      await build.write(opts.output as OutputOptions)
      spinner.succeed()
      process.exit()
    } catch (error) {
      console.log(`\n${TAG} ${chalk.red('构建报错')}\n`, error, '\n')
      spinner.fail()
      process.exit(1)
    }
  }
})();
