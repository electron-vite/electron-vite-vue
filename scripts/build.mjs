process.env.NODE_ENV = 'production'

import { build as viteBuild } from 'vite'
import { build as electronBuild, Platform } from 'electron-builder'
import { config as builderConfig } from '../configs/electron-builder.config.mjs'
import chalk from 'chalk'

const TAG = chalk.bgBlue(' build.mjs ')

const viteConfigs = {
  main: 'configs/vite-main.config.ts',
  preload: 'configs/vite-preload.config.ts',
  reactTs: 'configs/vite-renderer.config.ts',
}

async function buildElectron() {
  for (const [name, configPath] of Object.entries(viteConfigs)) {
    console.group(TAG, name)
    await viteBuild({ configFile: configPath, mode: process.env.NODE_ENV })
    console.groupEnd()
    console.log() // for beautiful log.
  }
}

async function packElectron() {
  return electronBuild({
    config: builderConfig,
    // if you want to build windows platform
    // targets: Platform.WINDOWS.createTarget(),
  }).then(result => {
    console.log(TAG, 'files:', chalk.green(result))
  })
}

// bootstrap
await buildElectron()
await packElectron()
