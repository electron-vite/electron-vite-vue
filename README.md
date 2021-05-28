# electron-vue-vite
`Electron` + `Vue3` + `Vite2` integration

## How and Why
- `Vite` is the scaffold of the future

## Command
- npm run dev
- npm run build

## Note
- In the development environment, we need to transform the `Electron` related API into commonjs
- And you can only use ESM
- So far, I've written an [vitejs-plugin-electron](https://github.com/caoxiemeihao/vitejs-plugins/tree/main/electron) plugin

## Usage
- vite.config.ts

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import electron from 'vitejs-plugin-electron'

export default defineConfig((env) => ({
  plugins: [
    vue(),
    electron(),
  ],
  // other config...
}))
```

> In "src/render/main.ts" file
  ```ts
  // You code
  import { ipcRenderer } from 'electron'
  import Store from 'electron-store'
  
  // Will be generate in development mode
  const { ipcRenderer } = require("electron")
  const Store = require("electron-store")
  ```

- It works!

- 🚀

- 开发模式下 Electron 相关的 API 需要转换成 commonjs
- 并且你只能用 ESM
- 为此我写了一个 [vitejs-plugin-electron](https://github.com/caoxiemeihao/vitejs-plugins/tree/main/electron) 插件

## electron-vue-vite-webpack
- If you're worried, you can consider using this project<br>
  [https://github.com/caoxiemeihao/electron-vue-vite-webpack]( https://github.com/caoxiemeihao/electron-vue-vite-webpack)<br>
  The production environment is packaged with 'webpack'

- 🚀

- 如果你怕踩坑，可以考虑用这个项目<br>
  [https://github.com/caoxiemeihao/electron-vue-vite-webpack](https://github.com/caoxiemeihao/electron-vue-vite-webpack)<br>
  生产环境使用 `webpack` 打包的

---

![](https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/main/screenshot/800x600-2.png)

---

## License

[MIT License](https://opensource.org/licenses/MIT)
