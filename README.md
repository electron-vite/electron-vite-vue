# electron-vue-vite
`Electron` + `vue3` + `vite2` + `ant-design-vue2` 整合

## 🐛 已知问题
- https://github.com/caoxiemeihao/electron-vue-vite/issues/7
- 项目打包后仍有问题 `待解决...` 暂时通过集成 `webpack` 解决打包问题 [https://github.com/caoxiemeihao/electron-vue-vite-webpack](https://github.com/caoxiemeihao/electron-vue-vite-webpack)

#### [简书地址](https://www.jianshu.com/p/ee5ec23d4716)

## How and Why
- 写这个 Demo 项目主要有两个目的
  1. `vue@3.x` 发布了，想试试新功能
  2. 工作中用的 `umi`+`electron` 项目大了，启动速度并不理想；
  用 `vite` 试试，算一个储备方案 `^_^`

## Command
- npm run dev
- npm run build

---
- 如果只需要最基础的集成 Demo 请使用 [`vite@2.x`](https://github.com/caoxiemeihao/electron-vue-vite/tree/vite%402.x) 或 [`vite@1.x`](https://github.com/caoxiemeihao/electron-vue-vite/tree/vite%401.x) 分支

![](https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/master/screenshot/login.png)

![](https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/master/screenshot/main-antd.png)

---

## Note `踩坑记`
- import { write } from 'fs' 的这种形式会被 vite 编译成 /@modules/fs?import
- const { write } = require('fs') 这种形式就能用了 😉
- const { ipcRenderer } = require('electron') 同理
- `21-02-18` "rollup-plugin-esbuild": "^2.4.2", 有 BUG
- `21-02-18` tsconfig.json中不能有多余的逗号，不然 `rollup-plugin-esbuild` 会有如下警告
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
- `21-02-18` main 进程中暂时无法用 require，打包后会导致模块找不到
- `21-02-18` `"asar": false` 这样可以保障 `"extraResources"` 能够正常搬运到文件夹中
- `21-02-18` 报错 **React is not defined**
  * 参考链接 `https://github.com/vitejs/vite/issues/1286`
  * 参考链接 `https://github.com/vitejs/vite/tree/main/packages/plugin-vue-jsx`
  ```ts
  // vite.config.js
  import vueJsx from '@vitejs/plugin-vue-jsx'

  export default {
    plugins: [
      vueJsx({
        // options are passed on to @vue/babel-plugin-jsx
      })
    ],
    esbuild: {
      jsxFactory: 'h',
      jsxFragment: 'Fragment'
    },
  }
  ```
- `21-02-19` 报错 `https://github.com/ajv-validator/ajv/issues/1399`
  ```bash
  Circular dependency: node_modules\conf\node_modules\ajv\dist\compile\validate\dataType.js -> node_modules\conf\node_modules\ajv\dist\compile\util.js -> node_modules\conf\node_modules\ajv\dist\compile\validate\index.js -> node_modules\conf\node_modules\ajv\dist\compile\validate\dataType.js
  ```

## License

[MIT License](https://opensource.org/licenses/MIT)

