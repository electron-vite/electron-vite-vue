# electron-vite-vue

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vite-vue?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vite-vue?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vite-vue?style=flat)


**[English](README.md) | 简体中文**

🥳 Electron + Vite + Vue 整合模板 -- **结构简单，容易上手！**

## 概述

📦 开箱即用  
💪 支持 C/C++ 模块  
🔩 支持在渲染进程中使用 Electron、Node.js API  
🌱 结构清晰，可塑性强  
🖥 很容易实现多窗口  

## 快速开始

```sh
npm create electron-vite
```

<!-- [![quick-start](https://asciinema.org/a/483731.svg)](https://asciinema.org/a/483731) -->

![electron-vite-vue.gif](https://github.com/electron-vite/electron-vite-vue/blob/main/packages/renderer/public/electron-vite-vue.gif?raw=true)

## 调试

![electron-vite-react-debug.gif](https://github.com/electron-vite/electron-vite-react/blob/main/packages/renderer/public/electron-vite-react-debug.gif?raw=true)

## 目录结构

```tree
├── dist                      构建后，根据 packages 目录生成
|   ├── main
|   ├── preload
|   └── renderer
|
├── scripts
|   ├── build.mjs             项目开发脚本 npm run build
|   └── watch.mjs             项目开发脚本 npm run dev
|
├── packages
|   ├── main                  主进程源码
|   |   └── vite.config.ts
|   ├── preload               预加载脚本源码
|   |   └── vite.config.ts
|   └── renderer              渲染进程源码
|       └── vite.config.ts
```

## 一些常见的案例

在 Main-process 中使用 👉 [electron-vite-boilerplate](https://github.com/caoxiemeihao/electron-vite-boilerplate)

在 Renderer-process 中使用 👉 [electron-vite-boilerplate/tree/nodeIntegration](https://github.com/caoxiemeihao/electron-vite-boilerplate/tree/nodeIntegration)

**ES Modules**

- [execa](https://www.npmjs.com/package/execa)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [file-type](https://www.npmjs.com/package/file-type)

**Native Addons(C/C++)**

- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [serialport](https://www.npmjs.com/package/serialport)
