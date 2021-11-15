# electron-vue-vite

![awesome-vite](https://camo.githubusercontent.com/abb97269de2982c379cbc128bba93ba724d8822bfbe082737772bd4feb59cb54/68747470733a2f2f63646e2e7261776769742e636f6d2f73696e647265736f726875732f617765736f6d652f643733303566333864323966656437386661383536353265336136336531353464643865383832392f6d656469612f62616467652e737667)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vue-vite?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vue-vite?style=flat)


**[English](README.md) | 简体中文**

🥳 `Electron` + `Vue3` + `Vite2` 整合模板 -- **结构简单，容易上手！**

## 运行项目

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

#### `dist` 与 `src`

- 一旦启动或打包脚本执行过，会在根目录产生 **`dist` 文件夹，里面的文件夹同 `src` 一模一样**

- 在使用一些路径计算时，尤其是相对路径计算；`dist` 与 `src` 里面保持相同的目录结构能避开好多问题

```tree
├── dist
├   ├── main
├   ├── preload
├   ├── renderer
├── src
├   ├── main
├   ├── preload
├   ├── renderer
├
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
<img width="400px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/electron-15.png" />

## 微信 | | 请我喝杯下午茶 🥳

<div style="display:flex;">
  <img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />
  &nbsp;&nbsp;&nbsp;&nbsp;
  <img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/%24qrcode/%24.png" />
</div>
