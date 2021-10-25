import { watch, rollup, OutputOptions } from 'rollup'
import minimist from 'minimist'
import chalk from 'chalk'
import ora from 'ora'
import WebSocket from 'ws'
import options from './rollup.config'
import { createWsServer, formatWsSendData } from './ws'

const argv = minimist(process.argv.slice(2))
const opt = options({ proc: 'preload', env: argv.env })
const TAG = '[build-preload.ts]'
const spinner = ora(`${TAG} Electron preload build...`)

; (async () => {
  if (argv.watch) {
    const watcher = watch(opt)
    const wssObj = createWsServer({ TAG })

    watcher.on('change', filename => {
      const log = chalk.yellow(`change -- ${filename}`)
      console.log(TAG, log)

      // Hot reload renderer process !!!
      if (wssObj.instance?.readyState === WebSocket.OPEN) {
        console.log(TAG, 'Hot reload renderer process')
        wssObj.instance.send(formatWsSendData({ cmd: 'reload', data: Date.now() }))
      }
    })
  } else {
    spinner.start()
    try {
      const build = await rollup(opt)
      await build.write(opt.output as OutputOptions)
      spinner.succeed()
      process.exit()
    } catch (error) {
      console.log(`\n${TAG} ${chalk.red('构建报错')}\n`, error, '\n')
      spinner.fail()
      process.exit(1)
    }
  }
})();
