# electron-vite-vue

🥳 Really simple `Electron` + `Vue` + `Vite` boilerplate.

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
[![Netlify Status](https://api.netlify.com/api/v1/badges/ae3863e3-1aec-4eb1-8f9f-1890af56929d/deploy-status)](https://app.netlify.com/sites/electron-vite/deploys)
![GitHub license](https://img.shields.io/github/license/caoxiemeihao/electron-vite-vue?style=flat)
![GitHub stars](https://img.shields.io/github/stars/caoxiemeihao/electron-vite-vue?color=fa6470&style=flat)
![GitHub forks](https://img.shields.io/github/forks/caoxiemeihao/electron-vite-vue?style=flat)

## Features

📦 Out of the box  
🎯 Based on the official [vue-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-vue-ts) template, less invasive  
🌱 Extensible, really simple directory structure  
💪 Support using Node.js API in Electron-Renderer  
🔩 Support C/C++ native addons  
🖥 It's easy to implement multiple windows  

## Quick Start

```sh
npm create electron-vite
```

<!-- [![quick-start](https://asciinema.org/a/483731.svg)](https://asciinema.org/a/483731) -->

![electron-vite-vue.gif](https://github.com/electron-vite/electron-vite-vue/blob/main/public/electron-vite-vue.gif?raw=true)

## Debug

![electron-vite-react-debug.gif](https://github.com/electron-vite/electron-vite-react/blob/main/public/electron-vite-react-debug.gif?raw=true)

## Directory

```diff
+ ├─┬ electron
+ │ ├─┬ main
+ │ │ └── index.ts    entry of Electron-main
+ │ └─┬ preload
+ │   └── index.ts    entry of Electron-preload
  ├─┬ src
  │ └── main.ts       entry of Electron-renderer
  ├── index.html
  ├── package.json
  └── vite.config.ts
```

## 🚨 `dependencies` vs `devDependencies`

**Put Node.js packages in `dependencies`**

**e.g.** `electron-store` `sqlite3` `serilaport` `mongodb` ...others

**Put Web packages in `devDependencies`**

**e.g.** `vue` `vue-router` `vuex` `pinia` `element-plus` `ant-design-vue` `axios` ...others

See more 👉 [dependencies vs devDependencies](https://github.com/electron-vite/vite-plugin-electron-renderer#dependencies-vs-devdependencies)

## 🚨 Node.js ESM packages

**e.g.** `node-fetch` `execa` `got` ...

[👉 Using Node.js ESM packages in Electron-Renderer](https://github.com/electron-vite/vite-plugin-electron-renderer#-nodejs-esm-packages)
