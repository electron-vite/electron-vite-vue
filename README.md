# electron-vue-vite
🥳 Simple boilerplate.

`Electron` + `Vue3` + `Vite2` integration

## Feature
- HRM

  * `Main process` hot restart
  * `Preload script` hot reload
  * `Renderer process` hot module replacement -- power by Vite

- Beautiful log

  * `[R]` means `Renderer process`
  * `[P]` means `Preload script`
  * `[M]` means `Main process`

  <img width="900px" src="https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/main/screenshot/better-log.png" />

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

## Branchs
- [ant-design-vue](https://github.com/caoxiemeihao/electron-vue-vite/tree/ant-design-vue)
  * [x] Use tsx
  * [x] Integration ant-design-vue
- [element-plus](https://github.com/caoxiemeihao/electron-vue-vite/tree/element-plus) `登录窗口、element-ui 这个可能很适合你` 🚀
  * [x] With multiple BrowserWindow
  * [x] Integration element-plus

## Mian window
<img width="700px" src="https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/main/screenshot/electron-15.png" />

## 微信讨论

<img width="244px" src="https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/main/blog/wx/qrcode.jpg" />

---

## License

[MIT License](https://opensource.org/licenses/MIT)
