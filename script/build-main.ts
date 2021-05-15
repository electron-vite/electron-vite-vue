/**
 * electron 打包
 */
import { join } from 'path'
import { spawn, ChildProcess } from 'child_process'
import { watch, rollup, OutputOptions } from 'rollup'
import minimist from 'minimist'
import chalk from 'chalk'
import ora from 'ora'
import electron from 'electron'
import dotenv from 'dotenv'
import { waitOn } from './utils'
import options from './rollup.config'
import { main } from '../package.json'

dotenv.config({ path: join(__dirname, '../.env') })

const argv = minimist(process.argv.slice(2))
const opts = options(argv.env)
const TAG = '[build-main.ts]'
const spinner = ora(`${TAG} Electron build...`)

if (argv.watch) {
  waitOn({ port: process.env.PORT as string }).then(msg => {
    const watcher = watch(opts)
    let child: ChildProcess
    watcher.on('change', filename => {
      const log = chalk.green(`change -- ${filename}`)
      console.log(TAG, log)
    })
    watcher.on('event', ev => {
      if (ev.code === 'END') {
        if (child) child.kill()
        child = spawn(electron as any, [join(__dirname, `../${main}`)], { stdio: 'inherit' })
      } else if (ev.code === 'ERROR') {
        console.log(ev.error)
      }
    })
  })
} else {
  spinner.start()
  rollup(opts)
    .then(build => {
      spinner.stop()
      console.log(TAG, chalk.green('Electron build successed.'))
      build.write(opts.output as OutputOptions)
    })
    .catch(error => {
      spinner.stop()
      console.log(`\n${TAG} ${chalk.red('构建报错')}\n`, error, '\n')
    })
}
