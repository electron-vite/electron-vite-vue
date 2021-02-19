# electron-vue-vite
`Electron` + `vue3` + `vite` 整合

#### [简书地址](https://www.jianshu.com/p/ee5ec23d4716)

## How and Why
- 写这个 Demo 项目主要有两个目的
  1. `vue@3.x` 发布了，想试试新功能
  2. 工作中用的 `umi`+`electron` 项目大了，启动速度并不理想；
  用 `vite` 试试，算一个储备方案 ^_^

## Command
- npm run dev
- npm run build

## Note `踩坑记`
- import { write } from 'fs' 的这种形式会被 vite 编译成 /@modules/fs?import
- const { write } = require('fs') 这种形式就能用了 😉
- const { ipcRenderer } = require('electron') 同理
- 虽然开发期可以用 require 避开 vite 的编译问题，但是打包时候 rollup 那边又出了问题；
  * 拿 const Store = require('electron-store') 举例，在 vite.config.ts 中通过自定义 rollup 插件转换成 EMS 形式即可
  ```javascript
    // vite.config.ts -> rollupInputOptions -> plugins
    plugins: [
      {
        name: '@rollup/plugin-cjs2esm',
        transform(code, filename) {
          if (filename.includes('/node_modules/')) {
            return code
          }

          const cjsRegexp = /(const|let|var)[\n\s]+(\w+)[\n\s]*=[\n\s]*require\(["|'](.+)["|']\)/g
          const res = code.match(cjsRegexp)
          if (res) {
            // const Store = require('electron-store') -> import Store from 'electron-store'
            code = code.replace(cjsRegexp, `import $2 from '$3'`)
          }
          return code
        },
      }
    ],
  ```
- "rollup-plugin-esbuild": "^2.4.2", 有 BUG `21-02-18`
- **tsconfig.json中不能有多余的逗号，不然有如下警告** `21-02-18`
  ```bash
   SyntaxError: Unexpected token ] in JSON at position 428
      at JSON.parse (<anonymous>)
      at Object.load (/Users/caoxie/Desktop/github/electron-vue-vite2/node_modules/rollup-plugin-esbuild/dist/index.js:21:17) {
    code: 'PLUGIN_ERROR',
    plugin: 'esbuild',
    hook: 'transform',
    id: '/Users/caoxie/Desktop/github/electron-vue-vite2/src/main/index.ts',
    watchFiles: [
      '/Users/caoxie/Desktop/github/electron-vue-vite2/src/main/index.ts'
    ]
  }
  ```
- main 进程中暂时无法用 require，打包后会导致模块找不到 `21-02-18`
- `"asar": false` 这样可以保障 `"extraResources"` 能够正常搬运到文件夹中 `21-02-18`

## 总结

- 2019 款 13 寸 mac-pro 启动速度 4秒 左右
- 奔腾 G4560 台机 CUP 神舟笔记本启动速度 6 秒左右
- 毋庸置疑 vite 的方案比起 @vue/cli、umi、create-react-app 这类基于 webpack 的脚手架启动这块的优势大的多滴多
- 技术总是飞快的迭代、进步，目的都是解决一些已经存在、或即将到来的问题；继续治疗、学习起来、加油哇~

---

![](https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/master/screenshot/800x600-2.png)
