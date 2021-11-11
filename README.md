# electron-vue-vite

![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vue-vite?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub issues](https://img.shields.io/github/issues/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vue-vite?style=flat)

**English | [简体中文](README.zh-CN.md)**

🥳 Simple `Electron` + `Vue3` + `Vite2` boilerplate. Build based on rollup and ⚡️vite.

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

## Directory

```tree
├
├── configs
├   ├── vite-main.config.ts          Main-process config file, for -> src/main
├   ├── vite-preload.config.ts       Preload-script config file, for -> src/preload
├   ├── vite-renderer.config.ts      Renderer-script config file, for -> src/renderer
├
├── scripts
├   ├── build.mjs                    Build script, for -> npm run build
├   ├── electron-builder.config.mjs
├   ├── watch.mjs                    Develop script, for -> npm run dev
├
├── src
├   ├── main                         Main-process source code
├   ├── preload                      Preload-script source code
├   ├── renderer                     Renderer-process source code
├
```

#### `dist` and `src`

- Once started or packaged, the script is executed. As like as two peas, the `dist` directory structure will be generated as `src`.

- This ensures the accuracy of path calculation.

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

## Communication

**All NodeJs、Electron API invoke passed `Preload-script`**

* **src/preload/index.ts**

  ```typescript
  // --------- Expose some API to Renderer process. ---------
  contextBridge.exposeInMainWorld('fs', fs)
  contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer)
  ```

* **src/renderer/src/main.ts**

  ```typescript
  console.log('fs', window.fs)
  console.log('ipcRenderer', window.ipcRenderer)
  ```

## Mian window
<img width="400px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/electron-15.png" />

## Wechat group

<img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />