/**
 * Electron main preload package script
 */
import { join } from 'path'
import { watch, rollup, RollupOptions, OutputOptions } from 'rollup'
import { builtins } from './utils'
import minimist from 'minimist'
import chalk from 'chalk'

const argv = minimist(process.argv.slice(2))
const opts = configFactory(argv.env)
const TAG = '[build-preload.ts]'

if (argv.watch) {
  const watcher = watch(opts)
  watcher.on('change', filename => {
    const log = chalk.yellow(`change -- ${filename}`)
    console.log(TAG, log)
  })
} else {
  rollup(opts)
    .then(build => {
      console.log(TAG, chalk.yellow('"preload/index.js" built.'))
      build.write(opts.output as OutputOptions)
    })
    .catch(error => {
      console.log(`\n${TAG} ${chalk.red('构建报错')}\n`, error, '\n')
    })
}

function configFactory(env = 'production') {
  const options: RollupOptions = {
    input: join(__dirname, '../src/preload/index.js'),
    output: {
      file: join(__dirname, '../dist/preload/index.js'),
      format: 'iife',
    },
    plugins: [],
    external: [
      ...builtins(),
      'electron',
    ],
  }

  return options
}
