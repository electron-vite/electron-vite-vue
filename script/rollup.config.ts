import path from 'path'
import { RollupOptions } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import typescript from '@rollup/plugin-typescript'
import { builtins } from './utils'

export interface ConfigOptions {
  env?: typeof process.env.NODE_ENV
  proc: 'main' | 'render' | 'preload'
}

export default function (opts: ConfigOptions) {
  const sourcemap = opts.proc === 'render'
  const options: RollupOptions = {
    input: path.join(__dirname, `../src/${opts.proc}/index.ts`),
    output: {
      dir: path.join(__dirname, `../dist/${opts.proc}`),
      format: 'cjs',
      sourcemap,
    },
    plugins: [
      nodeResolve({
        extensions: ['.ts', '.js', 'json'],
      }),
      commonjs(),
      json(),
      typescript({
        sourceMap: sourcemap,
        noEmitOnError: true,
      }),
      alias({
        entries: {
          '@root': path.join(__dirname, '..'),
          '@': path.join(__dirname, '../src'),
        },
      }), ,
    ],
    external: [
      ...builtins(),
      'electron',
    ],
    onwarn: warning => {
      // https://github.com/rollup/rollup/issues/1089#issuecomment-365395213
      if (warning.code !== 'CIRCULAR_DEPENDENCY') {
        console.error(`(!) ${warning.message}`)
      }
    },
  }

  return options
}
