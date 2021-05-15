import { join } from 'path'
import { RollupOptions } from 'rollup'
import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import { builtins } from './utils'

export default (env = 'production') => {
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
      typescript({
        module: 'ESNext',
      }),
      alias({
        entries: [
          { find: '@main', replacement: join(__dirname, '../src/main'), },
          { find: '@root', replacement: join(__dirname, '..'), },
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
