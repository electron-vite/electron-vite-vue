/**
 * Electron main process package script
 */
import { join } from 'path'
import { spawn, ChildProcess } from 'child_process'
import { watch, rollup, RollupOptions, OutputOptions } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import { builtins } from './utils'
import minimist from 'minimist'
import chalk from 'chalk'
import ora from 'ora'
import electron from 'electron'
import dotenv from 'dotenv'
import { waitOn } from './utils'
import { main } from '../package.json'

// Inject some environment variables from ".env"
dotenv.config({ path: join(__dirname, '../.env') })

const argv = minimist(process.argv.slice(2))
const opts = configFactory(argv.env)
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
        child = spawn(
          electron as any,
          [join(__dirname, `../${main}`)],
          {
            stdio: 'inherit',
            env: Object.assign(process.env, { NODE_ENV: argv.env }),
          })
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

function configFactory(env = 'production') {
  const options: RollupOptions = {
    input: join(__dirname, '../src/main/index.ts'),
    output: {
      file: join(__dirname, '../dist/main/index.js'),
      format: 'cjs',
      name: 'ElectronMainBundle',
      sourcemap: true,
    },
    plugins: [
      nodeResolve(),
      commonjs(),
      json(),
      typescript(),
      alias({
        entries: [
          { find: '@render', replacement: join(__dirname, '../src/render') },
          { find: '@main', replacement: join(__dirname, '../src/main') },
          { find: '@src', replacement: join(__dirname, '../src') },
          { find: '@root', replacement: join(__dirname, '..') },
        ]
      }),
    ],
    external: [
      ...builtins(),
      'electron',
    ],
  }

  return options
}
