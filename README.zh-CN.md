# electron-vite-vue

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vite-vue?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vite-vue?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vite-vue?style=flat)


**[English](README.md) | 简体中文**

🥳 Electron + Vite + Vue 整合模板 -- **结构简单，容易上手！**

## 快速开始

[![quick-start](https://asciinema.org/a/483731.svg)](https://asciinema.org/a/483731)

## 概述

&emsp;&emsp;这是一个追求精简的`Electron`类整合模板，只保持最基本的文件、最基本的依赖、最基本的功能；而不是大而全的、臃肿的设计。这样做的目的是能确保模板足够灵活。

所以说如果你是对 -- 工程模板追求精简的 Coder，或者刚入世的小白想弄明白`Electron`整合类模板最基础的工作原理，亦或者你是大神只是想偷懒少干点活；那么这个模板最合适你不过了。

尽管如此，我还是希望你对`Electron` `Vite`有一定的基础；因为除了项目结构简单外，这份`README`也显得 “精简” 。

模板的具体实现细节我相信你看两遍源码就能把它吃透了 😋

## 目录结构

&emsp;&emsp;一旦启动或打包脚本执行过，会在根目录产生 **`dist` 文件夹，里面的文件夹同 `packages` 一模一样**；在使用一些路径计算时，尤其是相对路径计算；`dist` 与 `packages` 里面保持相同的目录结构能避开好多问题

```tree
├
├── dist                      构建后，根据 packages 目录生成
├   ├── main
├   ├── preload
├   ├── renderer
├
├── scripts
├   ├── build.mjs             项目开发脚本 npm run build
├   ├── watch.mjs             项目开发脚本 npm run dev
├
├── packages
├   ├── main                  主进程源码
├       ├── vite.config.ts
├   ├── preload               预加载脚本源码
├       ├── vite.config.ts
├   ├── renderer              渲染进程源码
├       ├── vite.config.ts
├
```

## 一些常见的案例

在 Main-process 中使用 👉 [electron-vite-boilerplate](https://github.com/caoxiemeihao/electron-vite-boilerplate)

在 Renderer-process 中使用 👉 [electron-vite-boilerplate/tree/nodeIntegration](https://github.com/caoxiemeihao/electron-vite-boilerplate/tree/nodeIntegration)

**ES Modules**

- [execa](https://www.npmjs.com/package/execa)
- [node-fetch](https://www.npmjs.com/package/node-fetch)
- [file-type](https://www.npmjs.com/package/file-type)

**Native Addons**

- [sqlite3](https://www.npmjs.com/package/sqlite3)
- [serialport](https://www.npmjs.com/package/serialport)

## 运行效果
<img width="400px" src="https://github.com/caoxiemeihao/blog/blob/main/electron-vue-vite/screenshot/electron-15.png?raw=true" />

## <!--微信 | | -->请我喝杯下午茶 🥳

<div style="display:flex;">
  <!-- <img height="333px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/group/qrcode.jpg" />
  &nbsp;&nbsp;&nbsp;&nbsp; -->
  <img height="333px" src="https://raw.githubusercontent.com/caoxiemeihao/blog/main/assets/wechat/%24qrcode/%24.png" />
</div>
