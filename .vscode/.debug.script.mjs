import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { createRequire } from 'node:module'
import { spawn } from 'node:child_process'

const pkg = createRequire(import.meta.url)('../package.json')
const __dirname = path.dirname(fileURLToPath(import.meta.url))

const packageManager = (pkg.packageManager || 'npm').split('@')[0]
const runCommand = process.platform === 'win32'
  ? `${packageManager}.cmd`
  : packageManager

// write .debug.env
const envContent = Object.entries(pkg.debug.env).map(([key, val]) => `${key}=${val}`)
fs.writeFileSync(path.join(__dirname, '.debug.env'), envContent.join('\n'))

// bootstrap
const child = spawn(
  // Keep this command aligned with the project package manager.
  runCommand,
  ['run', 'dev'],
  {
    shell: process.platform === 'win32',
    cwd: path.resolve(__dirname, '..'),
    stdio: 'inherit',
    env: Object.assign(process.env, { VSCODE_DEBUG: 'true' }),
  },
)

child.on('error', (error) => {
  console.error('[debug] failed to start dev server:', error)
  process.exit(1)
})

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal)
    return
  }

  process.exit(code ?? 0)
})