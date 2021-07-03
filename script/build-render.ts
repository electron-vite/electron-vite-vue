import { join } from 'path'
import { RollupOptions, Plugin } from 'rollup'

function rollupOpts(env: typeof process.env.NODE_ENV): RollupOptions {
  return {
    input: join(__dirname, '../src/render/main.ts'),
    output: {
      dir: join(__dirname, '../dist/render'),
    },
    plugins: [],
    external: ['electron'],
  }
}

// ------------------- plugins -------------------
function html(): Plugin {
  return {
    name: 'cxmh:rollup/plugin-html',
  }
}

function style(): Plugin {
  return {
    name: 'cxmh:rollup/plugin-style',
  }
}

function file(): Plugin {
  return {
    name: 'cxmh:rollup/plugin-file',
  }
}

function electron(): Plugin {
  return {
    name: 'cxmh:rollup/plugin-electron',
  }
}

