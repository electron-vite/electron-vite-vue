# electron-vue-vite

![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vue-vite?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub issues](https://img.shields.io/github/issues/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vue-vite?style=flat)

**[English](README.md) | 简体中文**

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

## 目录结构

```tree
├
├── configs
├   ├── vite-main.config.ts          主进程配置文件，编译 src/main
├   ├── vite-preload.config.ts       预加载脚本配置文件，编译 src/preload
├   ├── vite-renderer.config.ts      渲染进程配置文件，编译 src/renderer
├
├── scripts
├   ├── build.mjs                    项目构建脚本，对应 npm run build
├   ├── electron-builder.config.mjs
├   ├── watch.mjs                    项目开发脚本，对应 npm run dev
├
├── src
├   ├── main                         主进程源码
├   ├── preload                      预加载脚本源码
├   ├── renderer                     渲染进程源码
├
```

#### dist 与 src

- 一旦启动或打包脚本执行过，会在根目录产生 **`dist` 文件夹，里面的文件夹同 `src` 一模一样**

- 在使用一些路径计算时，尤其是相对路径计算；`dist` 与 `src` 里面保持相同的目录结构能避开好多问题

  ```tree
  ├── dist
  |   ├── main
  |   ├── preload
  |   ├── renderer
  ├── src
  |   ├── main
  |   ├── preload
  |   ├── renderer
  |
  ```


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

* **src/renderer/main.ts**

  ```typescript
  console.log('fs', window.fs)
  console.log('ipcRenderer', window.ipcRenderer)
  ```

## 运行效果
<img width="700px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/electron-15.png" />

## 微信群

<img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />
