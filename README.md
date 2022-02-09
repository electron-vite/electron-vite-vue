# electron-vue-vite

![awesome-vite](https://camo.githubusercontent.com/abb97269de2982c379cbc128bba93ba724d8822bfbe082737772bd4feb59cb54/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652f643733303566333864323966656437386661383536353265336136336531353464643865383832392f6d656469612f62616467652e737667)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vue-vite?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vue-vite?style=flat)


**English | [简体中文](README.zh-CN.md)**

🥳 Very simple `Electron` + `Vue3` + `Vite2` boilerplate.

## Overview

This is an `Electron` category integration template that pursues simplification.  
This contains only the most basic files, the most basic dependencies, and the most basic functions. Instead of large and complex design.  
The purpose of this is to ensure that the template is flexible enough.

For all that, I still hope that you have a basic understanding for `Electron` `Vite`. Because in addition to the simple structure of the project, the `README` also appears too simplify.

You can learn more details by looking at the source code. Trust me, this template is the simple enough. 😋

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

Once `dev` or `build` npm-script executed will be generate named `dist` folder. It has children dir of same as `packages` folder, the purpose of this design can ensure the correct path calculation.

```tree
├
├── dist                      After build, it's generated according to the "packages" directory
├   ├── main
├   ├── preload
├   ├── renderer
├
├── scripts
├   ├── build.mjs             Develop script -> npm run build
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

> 🚧 By default, Electron don't support the use of API related to Electron and NodeJs in the Renderer-process, but someone still need to use it. If so, you can see the template 👉 **[electron-vite-boilerplate](https://github.com/caoxiemeihao/electron-vite-boilerplate)**

#### All Electron, NodeJs API invoke passed `Preload-script`

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

- First, yout need to make sure the deps in "dependencies". Because the project still needs it after packaged.

- Main-process, Preload-script are also built with Vite, and they are just built as [build.lib](https://vitejs.dev/config/#build-lib).  
So they just need to configure Rollup.

**Click to see more** 👉 [packages/main/vite.config.ts](https://github.com/caoxiemeihao/electron-vue-vite/blob/main/packages/main/vite.config.ts)

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

- First, you need to know if deps(npm package) are still needed after packaged.

- Like [serialport](https://www.npmjs.com/package/serialport), [sqlite3](https://www.npmjs.com/package/sqlite3) they are node-native module and should be placed in `dependencies`. In addition, Vite will not build them, but treat them as external modules.

- Like [vue](https://www.npmjs.com/package/vue), [react](https://www.npmjs.com/package/react) they are pure javascript module and can be built with Vite, so they can be placed in `devDependencies`. This reduces the volume of the built project.

## Main window
<img width="400px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/electron-15.png" />

## Wechat

<img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />
