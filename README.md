# electron-vue-vite

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vue-vite?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vue-vite?style=flat)


**English | [简体中文](README.zh-CN.md)**

🥳 Real simple `Electron` + `Vue3` + `Vite2` boilerplate.

## Quick Start

  ```bash
  # clone the project
  git clone https://github.com/caoxiemeihao/electron-vue-vite.git

  # enter the project directory
  cd electron-vue-vite

  # install dependency
  npm install

  # develop
  npm run dev
  ```

![quick-start](packages/renderer/public/images/quick-start.gif)

## Overview

This is a `Vite`-integrated `Electron` template built with simplification in mind.

The repo contains only the most basic files, dependencies and functionalities to ensure flexibility for various scenarios. 

You need a basic understanding of `Electron` and `Vite` to get started. But that's not mandatory - you can learn almost all the details by reading through the source code. Trust me, this repo is not that complex. 😋

## Directory

A `dist` folder will be generated everytime when `dev` or `build` command is executed. File structure of `dist` is identical to the `packages` directory to avoid any potential path calculation errors.

```tree
├
├── dist                      Will be generated following the structure of "packages" directory
├   ├── main
├   ├── preload
├   ├── renderer
├
├── scripts
├   ├── build.mjs             Build script -> npm run build
├   ├── watch.mjs             Develop script -> npm run dev
├
├── packages
├   ├── main                  Main-process source code
├       ├── vite.config.ts
├   ├── preload               Preload-script source code
├       ├── vite.config.ts
├   ├── renderer              Renderer-process source code
├       ├── vite.config.ts
├
```

## `dependencies` vs `devDependencies`

- First, you need to know if the package is still needed at runtime after packed.

- Packages like [serialport](https://www.npmjs.com/package/serialport), [sqlite3](https://www.npmjs.com/package/sqlite3) are node-native modules and should be placed in `dependencies`. Vite will not build them and will treat them as externals.

- Packages like [vue](https://www.npmjs.com/package/vue), [react](https://www.npmjs.com/package/react) are pure javascript modules and can be built with Vite. They can be listed in `devDependencies` which helps reducing the size of bundled product.

## Use Electron, NodeJs API

> 🚧 Due to [electron security](https://www.electronjs.org/docs/latest/tutorial/security/) constraints, using Electron or NodeJS API in the rederer process is strongly discouraged.

The template provides two methods for using the NodeJs API in the rendering process:

1. Bypass the security constraints (**default**), located in the [main](https://github.com/caoxiemeihao/electron-vue-vite/tree/main) branch. `nodeIntegration` is enabled by default, making it easy to use.:tada:, but there are certain security risks 🚧.
2. Inject Render by preload script, located in the [withoutNodeIntegration](https://github.com/caoxiemeihao/electron-vue-vite/tree/withoutNodeIntegration) branch. `nodeIntegration` is turned off by default, the official recommended way of electron, more secure:lock:.


**For [1](https://github.com/caoxiemeihao/electron-vue-vite/tree/main), all NodeJs and Electron APIs can be used directly in the rendering process.**


**For [2](https://github.com/caoxiemeihao/electron-vue-vite/tree/withoutNodeIntegration), all NodeJs, Electron APIs injected into the rendering process via `Preload-script`**

you need to create a context bridge and expose the APIs you need to the renderer process.

Note that if your project uses typescript, you also need to add type declarations to the `Window` interface, for example:

* **packages/preload/index.ts**

  ```typescript
  import fs from 'fs'
  import { contextBridge, ipcRenderer } from 'electron'

  // --------- Expose some API to Renderer-process. ---------
  contextBridge.exposeInMainWorld('fs', fs)
  contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer)
  ```

* **packages/renderer/src/global.d.ts**

  ```typescript
  // Defined on the window
  interface Window {
    fs: typeof import('fs')
    ipcRenderer: import('electron').IpcRenderer
  }
  ```

* **packages/renderer/src/main.ts**

  ```typescript
  // Use Electron, NodeJs API in Renderer-process
  console.log('fs', window.fs)
  console.log('ipcRenderer', window.ipcRenderer)
  ```

Finally, either way, for third-party NodeJs APIs (e.g. `sqlite3`), You'll also need to declare how it was imported in `packages/renderer/vite.config.ts` `defineConfig.plugins` so that the template can recognize them correctly. 👉 reference `issues` [resolveElectron](https://github.com/caoxiemeihao/electron-vue-vite/issues/52)

## Use SerialPort, SQLite3 or other node-native addons in Main-process

- First, you need to make sure the packages are listed in the "dependencies" since they are still needed at runtime after the project is packed.

- Source code of main process and preload scripts are also bundled with Vite[build.lib](https://vitejs.dev/config/#build-lib). Rollup configurations needed.

**More:** 👉 [packages/main/vite.config.ts](https://github.com/caoxiemeihao/electron-vue-vite/blob/main/packages/main/vite.config.ts)

```js
export default {
  build: {
    // built lib for Main-process, Preload-script
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      fileName: () => '[name].js',
    },
    rollupOptions: {
      // configuration here
      external: [
        'serialport',
        'sqlite3',
      ],
    },
  },
}
```

## Main window
<img width="400px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/electron-15.png" />

## Wechat

<img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />
