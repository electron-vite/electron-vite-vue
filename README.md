# electron-vue-vite

![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vue-vite?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub issues](https://img.shields.io/github/issues/caoxiemeihao/electron-vue-vite?style=flat)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vue-vite?style=flat)

🥳 Simple `Electron` + `Vue3` + `Vite2` boilerplate. Build based on rollup and ⚡️vite.

## Feature
- HRM

  * `Main process` hot restart
  * `Preload script` hot reload
  * `Renderer process` hot module replacement -- power by Vite

- Beautiful log -- power by concurrently

  * `[R]` means `Renderer process`
  * `[P]` means `Preload script`
  * `[M]` means `Main process`

  <img width="700px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/better-log.png" />

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

## Communication
- All NodeJs、Electron API invoke passed `Preload script`

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
## Branchs
- [ant-design-vue](https://github.com/caoxiemeihao/electron-vue-vite/tree/ant-design-vue)
  * [x] Use tsx
  * [x] Integration ant-design-vue
- [element-plus](https://github.com/caoxiemeihao/electron-vue-vite/tree/element-plus) `登录窗口、element-ui 这个可能很适合你` 🚀
  * [x] With multiple BrowserWindow
  * [x] Integration element-plus

## Mian window
<img width="700px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/electron-vue-vite/screenshot/electron-15.png" />

## Wechat group

<img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />