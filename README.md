# electron-vue-vite
`Electron` + `Vue3` + `Vite2` integration

## How and Why
- `Vite` is the scaffold of the future

## Command
- npm run dev
- npm run build

## Note
- Using `Nodejs` `Electron` API in vite and using require to import
  ```ts
  // import { readFile } from 'fs'
  // import { ipcRenderer } from 'electron'

  const { readFile } = require('fs')
  const { ipcRenderer } = require('electron')
  ```

---

![](https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/main/screenshot/800x600-2.png)

---

## License

[MIT License](https://opensource.org/licenses/MIT)
