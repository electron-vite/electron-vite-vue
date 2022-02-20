# electron-vue-vite

![awesome-vite](https://camo.githubusercontent.com/abb97269de2982c379cbc128bba93ba724d8822bfbe082737772bd4feb59cb54/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652f643733303566333864323966656437386661383536353265336136336531353464643865383832392f6d656469612f62616467652e737667)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vue-vite?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vue-vite?style=flat)


**English | [简体中文](README.zh-CN.md)**

🥳 Real simple `Electron` + `Vue3` + `Vite2` boilerplate.

## Overview

This is a `Vite`-integrated `Electron` template built with simplification in mind.

The repo contains only the most basic files, dependencies and functionalities to ensure flexibility for various scenarios. 

You need a basic understanding of `Electron` and `Vite` to get started. But that's not mandatory - you can learn almost all the details by reading through the source code. Trust me, this repo is not that complex. 😋

## Run Setup

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

## Use Electron, NodeJs API

> 🚧 By default, using Electron or NodeJS API in the rederer process is strongly discouraged.  For anyone who needs to bypass the security constraints, take a look at this template 👉 **[electron-vite-boilerplate](https://github.com/caoxiemeihao/electron-vite-boilerplate)**

As electron suggested, if you need access to the Electron and NodeJS API in the renderer process, you need to create a context bridge and expose the APIs you need to the renderer process.

Note that if your project uses typescript, you also need to add type declarations to the `Window` interface.

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

## `dependencies` vs `devDependencies`

- First, you need to know if the package is still needed at runtime after packed.

- Packages like [serialport](https://www.npmjs.com/package/serialport), [sqlite3](https://www.npmjs.com/package/sqlite3) are node-native modules and should be placed in `dependencies`. Vite will not build them and will treat them as externals.

- Packages like [vue](https://www.npmjs.com/package/vue), [react](https://www.npmjs.com/package/react) are pure javascript modules and can be built with Vite. They can be listed in `devDependencies` which helps reducing the size of bundled product.

## Main window
<img width="400px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/electron-15.png" />

## Wechat

<img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />
