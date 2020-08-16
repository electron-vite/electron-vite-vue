const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');

module.exports = (env = 'production') => {
  return {
    input: path.join(__dirname, '../src/main/index.ts'),
    output: {
      file: path.join(__dirname, '../src/main/_.js'),
      format: 'cjs',
      name: 'ElectronMainBundle',
      sourcemap: true,
    },
    plugins: [
      nodeResolve({ jsnext: true, preferBuiltins: true, browser: true }), // 消除碰到 node.js 模块时⚠警告
      commonjs(),
      typescript(),
    ],
    external: [
      'fs',
      'path',
      'electron',
      'electron-is-dev',
    ],
  }
};
