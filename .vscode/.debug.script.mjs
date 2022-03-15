import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const pkg = createRequire(import.meta.url)('../package.json')
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// write .debug.env
const envContent = Object.entries(pkg.env).map(([key, val]) => `${key}=${val}`)
fs.writeFileSync(path.join(__dirname, '.debug.env'), envContent.join('\n'))

// bootstrap
import('../scripts/watch.mjs?debug=vscode')
