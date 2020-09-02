# electron-vue-vite
Electron、vue、vite 整合

## How and Why
- 写这个 Demo 项目主要有两个目的
  1. `vue@3.x` 发布了，想试试新功能
  2. 工作中用的 `umi`+`electron` 项目大了，启动速度并不理想；用 `vite` 试试，算一个储备方案 ^_^

## cmd
- npm run dev
- npm run build

## 踩坑记
- import { write } from 'fs' 的这种形式会被 vite 编译成 /@modules/fs?import
const { write } = require('fs') 这种形式就能用了 😉
- const { ipcRenderer } = require('electron') 同理

---

![](https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/master/screenshot/800x600.png)
