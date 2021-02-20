import { join } from 'path'
import { RollupOptions } from 'rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import alias from '@rollup/plugin-alias'
import json from '@rollup/plugin-json'
import externals from 'rollup-plugin-node-externals'

export default (env = 'production') => {
  const options: RollupOptions = {
    input: join(__dirname, '../src/main/index.ts'),
    output: {
      file: join(__dirname, '../dist/main/_.js'),
      format: 'cjs',
      name: 'ElectronMainBundle',
      sourcemap: true,
    },
    plugins: [
      nodeResolve({ preferBuiltins: true, browser: true }), // 消除碰到 node.js 模块时⚠警告
      commonjs(),
      json(),
      esbuild({
        // All options are optional
        include: /\.[jt]sx?$/, // default, inferred from `loaders` option
        exclude: /node_modules/, // default
        // watch: process.argv.includes('--watch'), // rollup 中有配置
        sourceMap: false, // default
        minify: env === 'production',
        target: 'es2017', // default, or 'es20XX', 'esnext'
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        // Like @rollup/plugin-replace
        define: {
          __VERSION__: '"x.y.z"'
        },
        tsconfig: 'tsconfig.json', // default
        // Add extra loaders
        loaders: {
          // Add .json files support
          // require @rollup/plugin-commonjs
          '.json': 'json',
          // Enable JSX in .js files too
          '.js': 'jsx'
        },
      }),
      alias({
        entries: {
          '@src': join(__dirname, '../src'),
          '@root': join(__dirname, '..'),
        },
      }),
      externals(),
    ],
    external: ['electron'],
  }

  return options
}
