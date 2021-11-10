# electron-vue-vite

![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vue-vite?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub issues](https://img.shields.io/github/issues/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vue-vite?style=flat)

**简体中文 | [English](README.zh-CN.md)**

🥳 基于 `Rollup`、`⚡️Vite` 构建的 `Electron` + `Vue3` + `Vite2` 模板；**简单，容易上手！**

## Run Setup

  ```bash
  # clone the project
  git clone git@github.com:caoxiemeihao/electron-vue-vite.git

  # enter the project directory
  cd electron-vue-vite

  # install dependency(Recommend use yarn)
  yarn

  # develop
  yarn dev
  ```

## 工作原理

#### `main`、`preload`、`render`

* **这个三个 Electron 中的重要概念会贯穿整个模板的脚本与源码的设计**

* **它们分别对应 主进程(main-process)、预加载脚本(preload-script)、渲染进程(renderer-process)**

* **设计上，它们构建脚本独立、源码独立**

#### 顶层只有 `scripts`、`src` 两个目录

* `scripts` 负责 主进程(main-process) 与 预加载脚本(preload-script) 的编译、热更新功能

* `src` 项目目录源码 -- `见名知意`

#### `package.json[scripts]` 中提供了三个对应的 开发(dev) 与 构建(build) 命令

* `dev:render` 对应 `vite serve` 提供开发期的 `renderer-process` 热更新 (vite 提供的 HMR 功能)

* `dev:preload` 对应 `scripts/build-preload.ts --watch` 提供开发期的 `preload-script` 重载 (通过 WebSocket 通知页面刷新即可重新加载 preload-script)

* `dev:main` 对应 `scripts/build-main.ts --watch` 提供开发期的 `main-process` 重启 (直接杀死当前 Electron 应用，然后重新拉起)

* `dev` 由 `concurrently` 组合的上面三个命令，并且提供 `[R]`、`[P]`、`[M]` 三个前缀提高 log 的辨识度

* <img width="700px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/better-log.png" />

* ----

* `build:render` 对应 `vite build` 构建 `renderer-process` 代码 (vite)

* `build:preload` 对应 `vite build` 构建 `scripts/build-preload.ts` 代码 (rollup)

* `build:main` 对应 `vite build` 构建 `scripts/build-main.ts` 代码 (rollup)

* `build` 串联了上述三个命令，之后运行了 `electron-builder`

* ----

#### dist 与 src

- 一旦启动或打包脚本执行过，会在根目录产生 **`dist` 文件夹，里面的文件夹同 `src` 一模一样**

  ```tree
  ├── dist
  |   ├── main
  |   ├── preload
  |   ├── render
  ├── src
  |   ├── main
  |   ├── preload
  |   ├── render
  |
  ```

- 在使用一些路径计算时，尤其是相对路径计算；`dist` 与 `src` 里面保持相同的目录结构能避开好多问题

## 渲染进程使用 NodeJs API

- 因为安全的原因 Electron 默认不支持在 渲染进程 中使用 NodeJs API

  (如果你执意要在 渲染进程 中使用 NodeJs API 那请自便)

- 推荐所有的 NodeJs、Electron API 通过 `preload-script` 注入到 渲染进程中，例如：

  * **src/preload/index.ts**

    ```typescript
    // --------- Expose some API to Renderer process. ---------
    contextBridge.exposeInMainWorld('fs', fs)
    contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer)
    ```

  * **typings/global.d.ts**

    ```typescript
    interface Window {
      fs: typeof import('fs')
      ipcRenderer: import('electron').IpcRenderer
    }
    ```

  * **src/render/main.ts**

    ```typescript
    console.log('fs', window.fs)
    console.log('ipcRenderer', window.ipcRenderer)
    ```
## 关于技术选型

- 最早开始这个项目时 `Vite` 还在 1.0 阶段，基本是给个验性的工具；

  所以 主进程(main-process)、预加载脚本(preload-script) 需要额外用 `Rollup` 打包；

  选择 `Rollup` 构建主要是两点原因

  * 一来构建出来的代码很清晰尤其是对比 `Webpack`

  * 二来是本身 `Vite` 也是基于 `Rollup` 的，所以能通用很多包，少装点依赖，统一技术栈

- 如果你嫌这个项目(Rollup)运行慢；你可以尝试下我的另一模板，所有代码均使用 `Vite` 构建；

  速度上确实要比这个快很多，顺便还集成了 `React` 🎉

  * 👉 [⚡️ Super-fast electron + vite boilerplate. Support React/Vue template.](https://github.com/caoxiemeihao/electron-vite-template)

## 运行效果
<img width="700px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/electron-15.png" />

## 微信群

<img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />