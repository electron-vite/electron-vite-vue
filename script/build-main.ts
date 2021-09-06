import path from 'path'
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

dotenv.config({ path: path.join(__dirname, '../.env') })

const argv = minimist(process.argv.slice(2))
const opt = options({ proc: 'main', env: argv.env })
const TAG = '[build-main.ts]'
const spinner = ora(`${TAG} Electron main build...`)

; (async () => {
  if (argv.watch) {
    // Wait on vite server launched
    await waitOn({ port: process.env.PORT as string })

    const watcher = watch(opt)
    let child: ChildProcess
    watcher.on('change', filename => {
      const log = chalk.green(`change -- ${filename}`)
      console.log(TAG, log)
    })
    watcher.on('event', ev => {
      if (ev.code === 'END') {
        if (child) child.kill()
        child = spawn(electron as any, [path.join(__dirname, `../${main}`)], { stdio: 'inherit' })
      } else if (ev.code === 'ERROR') {
        console.log(ev.error)
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

