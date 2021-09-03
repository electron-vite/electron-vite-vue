import { join } from 'path'
import { RollupOptions } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import {
  builtins,
  typescript,
} from './utils'

export interface ConfigOptions {
  env?: typeof process.env.NODE_ENV
  proc: 'main' | 'render' | 'preload'
}

export default function (opts: ConfigOptions) {
  const options: RollupOptions = {
    input: join(__dirname, `../src/${opts.proc}/index.ts`),
    output: {
      dir: join(__dirname, `../dist/${opts.proc}`),
      format: 'cjs',
      sourcemap: false,
    },
    plugins: [
      nodeResolve({
        // 消除碰到 node.js 模块时⚠警告
        // preferBuiltins: true, browser: true,

        // 这里配置 .ts 解决 rollup-plugin-esbuild 加载 ts 文件找不到
        // 与 @rollup/plugin-alias 配置 customResolver 效果相同
        extensions: ['.ts', '.js'],
      }),
      commonjs(),
      json(),
      typescript(),
      alias({
        entries: {
          '@src': join(__dirname, '../src'),
          '@root': join(__dirname, '..'),
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
