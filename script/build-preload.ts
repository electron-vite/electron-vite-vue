import { join } from 'path'
import { watch, rollup, OutputOptions } from 'rollup'
import minimist from 'minimist'
import chalk from 'chalk'
import ora from 'ora'
import dotenv from 'dotenv'
import options from './rollup.config'

dotenv.config({ path: join(__dirname, '../.env') })

const argv = minimist(process.argv.slice(2))
const opt = options({ proc: 'preload', env: argv.env })
const TAG = '[build-preload.ts]'
const spinner = ora(`${TAG} Electron preload build...`)

if (argv.watch) {
  const watcher = watch(opt)
  watcher.on('change', filename => {
    const log = chalk.yellow(`change -- ${filename}`)
    console.log(TAG, log)
  })
} else {
  spinner.start()
  rollup(opt)
    .then(build => {
      spinner.stop()
      console.log(TAG, chalk.yellow('Electron preload build successed.'))
      build.write(opt.output as OutputOptions)
    })
    .catch(error => {
      spinner.stop()
      console.log(`\n${TAG} ${chalk.red('构建报错')}\n`, error, '\n')
    })
}
