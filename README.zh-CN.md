# electron-vue-vite

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vue-vite?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vue-vite?style=flat)


**[English](README.md) | 简体中文**

🥳 `Electron` + `Vue3` + `Vite2` 整合模板 -- **结构简单，容易上手！**

## 快速开始

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

## 概述

&emsp;&emsp;这是一个追求精简的`Electron`类整合模板，只保持最基本的文件、最基本的依赖、最基本的功能；而不是大而全的、臃肿的设计。这样做的目的是能确保模板足够灵活。

所以说如果你是对 -- 工程模板追求精简的 Coder，或者刚入世的小白想弄明白`Electron`整合类模板最基础的工作原理，亦或者你是大神只是想偷懒少干点活；那么这个模板最合适你不过了。

尽管如此，我还是希望你对`Electron` `Vite`有一定的基础；因为除了项目结构简单外，这份`README`也显得 “精简” 。

模板的具体实现细节我相信你看两遍源码就能把它吃透了 😋

## 目录结构

&emsp;&emsp;一旦启动或打包脚本执行过，会在根目录产生 **`dist` 文件夹，里面的文件夹同 `packages` 一模一样**；在使用一些路径计算时，尤其是相对路径计算；`dist` 与 `packages` 里面保持相同的目录结构能避开好多问题

```tree
├
├── dist                      构建后，根据 packages 目录生成
├   ├── main
├   ├── preload
├   ├── renderer
├
├── scripts
├   ├── build.mjs             项目开发脚本 npm run build
├   ├── watch.mjs             项目开发脚本 npm run dev
├
├── packages
├   ├── main                  主进程源码
├       ├── vite.config.ts
├   ├── preload               预加载脚本源码
├       ├── vite.config.ts
├   ├── renderer              渲染进程源码
├       ├── vite.config.ts
├
```

## 依赖放到 dependencies 还是 devDependencies

&emsp;&emsp;对待 **Electron-Main、Preload-Script** 时 vite 会以 lib 形式打包 commonjs 格式代码；
如果碰 node 环境的包可以直接放到 dependencies 中，vite 会解析为 require('xxxx')；
electron-builder 打包时候会将 dependencies 中的包打包到 app.asar 里面

&emsp;&emsp;对待 **Electron-Renderer** 时 vite 会以 ESM 格式解析代码；
像 vue、react 这种前端用的包可以直接被 vite 构建，所以不需要 vue、react 源码；
现实情况 vue、react 放到 dependencies 或 devDependencies 中都可以被正确构建；
但是放到 dependencies 会被 electron-builder 打包到 app.asar 里面导致包体变大；
所以放到 devDependencies 既能被正确构建还可以减小 app.asar 体积，一举两得

## 渲染进程使用 NodeJs API

> 🚧 因为 [electron 安全约束的原因](https://www.electronjs.org/docs/latest/tutorial/security/) Electron 默认不支持在 渲染进程 中使用 NodeJs API。

在渲染进程中使用 NodeJs API 的方式，本模版提供了两种方案：

1. 忽视安全约束(**默认**)，位于[main](https://github.com/caoxiemeihao/electron-vue-vite/tree/main) 分支。默认开启了 `nodeIntegration`，开箱即用使用简便:tada:，但是有一定 XSS 攻击风险 🚧。

2. 通过 preload 方式向 Render 注入，位于 [withoutNodeIntegration](https://github.com/caoxiemeihao/electron-vue-vite/tree/withoutNodeIntegration) 分支。默认关闭了 `nodeIntegration`，electron 官方推荐的方式，更加安全:lock:。

**对于[方案 1](https://github.com/caoxiemeihao/electron-vue-vite/tree/main)，所有的 NodeJs、Electron API 可以直接在 渲染进程 中使用。**


**对于[方案 2](https://github.com/caoxiemeihao/electron-vue-vite/tree/withoutNodeIntegration)，所有的 NodeJs、Electron API 通过 `Preload-script` 注入到 渲染进程中**

您需要创建一个 context bridge，并向渲染进程暴露所需的 API。请注意，如果您的项目使用 typescript，则还需要将类型声明添加到 `Window` interface，例如：

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

  ```typescript
  // Use Electron, NodeJs API in Renderer-process
  console.log('fs', window.fs)
  console.log('ipcRenderer', window.ipcRenderer)
  ```

最后，不管是哪种方式，对于第三方 NodeJs API (例如 `sqlite3`) 你还需要在 `packages/renderer/vite.config.ts` 的 `defineConfig.plugins` 中声明它的导入方式，从而让模版能够正确识别它们。关于原理 `resolveElectron` **最好了解下**  
👉 这里有个 `issues` [请教一下vite-renderer.config中的resolveElectron函数](https://github.com/caoxiemeihao/electron-vue-vite/issues/52)

## 在主进程中使用 SerialPort，SQLite3 等 node-native addons

- 首先，您需要确保这些第三方 node-native addons 被放到了 "dependencies" 中，以二进制文件确保能够被打包。

- main 进程和 preload 脚本也需要对应在 vite [build.lib](https://vitejs.dev/config/#build-lib) 中配置打包，需要配置 rollup 选项。

**查看更多：** 👉 [packages/main/vite.config.ts](https://github.com/caoxiemeihao/electron-vue-vite/blob/main/packages/main/vite.config.ts)

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

## 运行效果
<img width="400px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/electron-15.png" />

## 微信 | | 请我喝杯下午茶 🥳

<div style="display:flex;">
  <img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/%24qrcode/%24.png" />
</div>
