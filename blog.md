# Electron + vue3 + vite 整合

- 伴随着 `vue3` 的发布，vue 全家桶又添新成成员 ——`vite` 脚手架工具；相比 `@vue/cli` 基于浏览器内置的 ES module 极快的冷启动速度、基于 `Rollup` 打包的配置更简单(确实简单)；
`vite` 底层原理网上已有好多文章，本文主要讲使用

- 公司的项目用的整合方案是 `umi` + `electron` ，umi 是我用过目前最傻瓜化的框架了，你能想到的她都做了而且还是自动化的 👍
唯一一点不大好的 umi 的构建速度较慢；
vite 冷启动速度确实让人眼前一亮，索性拿来和 electron 集成一波；算是一个技术备选方案 `^_^`

> 毕竟 ****尤大出品，必是精品**** 定律嘛！

![](https://raw.githubusercontent.com/caoxiemeihao/electron-vue-vite/master/screenshot/800x600.png)


#### 准备材料
- `vue3`
- `vite` vue3 脚手架
- `electron`
- `electron-builder` electron 构建工具
- `electron-connect` 主进程代码修改热重启
- `rollup` 之前写过一个偏文章 [Electron、webpack、react、typescript 从零开始搭积木](https://www.jianshu.com/p/3aafab67ff70)
  * 一来能少装个包，vite 用的也是 rollup —— 入乡随俗
  * 二来 rollup 的配置比 webpack 简单又专注于 js 的打包；只是用来打包 electron 主进程代码确实方便
- `concurrently` 同时启动 vite(渲染进程)、electron(主进程)
- `wait-on` 用于监听 vite 启动，随后拉起 electron 启动
- `chalk` 命令行文字颜色、背景色
- `ora` 命令行友好提示
- `minimist` 命令行参数解析
- `dotenv` 解析 .env 文件

#### 目录结构
```tree
.
├─dist                    打包后的文件夹
├─screenshot
├─script
│  ├─build.js             主进程构建文件
│  └─rollup.config.js     主进程构建配置
└─src
    ├─main
    │  └─index.ts         主进程入口文件
    └─render
        ├─assets
        ├─components
        ├─dist            vue 打包后目录
        │  _assets
        ├─public
        ├─App.vue
        ├─index.css
        ├─index.html
        └─main.js         渲染进程入口文件
└─.env                    配置文件
```

#### 主进程构建配置

> script/rollup.config.js

- `@rollup/plugin-node-resolve` 支持引入 `node_modules` 模块
- `@rollup/plugin-commonjs` 支持 `require`、`module.exports` 写法
- `@rollup/plugin-typescript` 支持 `typescript`

```javascript
const path = require('path');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const typescript = require('@rollup/plugin-typescript');

module.exports = (env = 'production') => {
  return {
    input: path.join(__dirname, '../src/main/index.ts'), // 入口文件
    output: {
      file: path.join(__dirname, '../src/main/_.js'), // 输出目标
      format: 'cjs', // CommonJs 格式
      name: 'ElectronMainBundle', // 模块名称(可选)
      sourcemap: true,
    },
    plugins: [
      nodeResolve({ jsnext: true, preferBuiltins: true, browser: true }), // 支持引入 node_modules 模块
      commonjs(), // 支持 CommonJs 规范
      typescript(), // 支持 TypeScript
    ],
    external: [
      // 告诉 rollup 碰到下面模块时候不要去打包
      'fs',
      'path',
      'http',
      'https',
      'child_process',
      'os',
      'electron',
    ],
  }
};
```

#### 主进程构建脚本

> script/build.js

- 实现思路: 使用 `wait-on` 监听 `vite` 启动，然后拉起 `electron` 打开渲染进程加载 vue 应用
- `rollup` 使用比较简单
  * 如果是开发模式用 `rollup.watch(options)` 会监听文件变化，文件改变自动重新编译
  * 如果只是构建使用 `rollup.rollup(options)` 只会执行一次构建

```javascript
/**
 * electron 打包
 */
const path = require('path');
const rollup = require('rollup');
const argv = require('minimist')(process.argv.slice(2));
const chalk = require('chalk');
const ora = require('ora');
const waitOn = require('wait-on');
const electron = require('electron-connect').server.create({ stopOnClose: true }); // 表示要操作主进程端(对应的还是渲染进程端；渲染进程用的 vite 热更新)
require('dotenv').config({ path: path.join(__dirname, '../.env') }); // 解析项目根目录下的 .env 文件
const options = require('./rollup.config'); // 引入 rollup 配置

const opt = options(argv.env);
const TAG = '[script/build.js]';
const spinner = ora(`${TAG} Electron build...`);

if (argv.watch) { // 开发模式 (命令行传入 --watch 标识)
  waitOn({
    resources: [`http://localhost:${process.env.PORT}`], // 等待 vite 服务器启动，然后拉起 electron
    log: false,
  }, err => {
    if (err) {
      console.log(err);
      process.exit(1);
    }

    // once here, all resources are available
    const watcher = rollup.watch(opt);
    watcher.on('change', filename => {
      const log = chalk.green(`change -- ${filename}`);
      console.log(TAG, log);
    });
    watcher.on('event', ev => {
      if (ev.code === 'END') {
        // init-未启动、started-第一次启动、restarted-重新启动
        electron.electronState === 'init' ? electron.start() : electron.restart();
      }
    });
  });
} else { // 构建模式
  spinner.start();
  rollup.rollup(opt)
    .then(build => {
      spinner.stop();
      console.log(TAG, chalk.green('Electron build successed.'));
      build.write(opt.output);
    })
    .catch(error => {
      spinner.stop();
      console.log(`\n${TAG} ${chalk.red('构建报错')}\n`, error, '\n');
    });
}
```

#### 渲染进程 vite 配置

> vite.config.ts

- 需要改变 `vite` 的构建路径，因为 vue 代码移动到了 `src/render` 下
- 通过 `.env` 配置启动端口，配合主进程监听端口启动

```typescript
/**
 * 参考链接: https://github.com/vitejs/vite/blob/master/src/node/config.ts
 */
import { join } from 'path'
import { UserConfig } from 'vite'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '.env') })

const config: UserConfig = {
  // vite 项目编译、启动的根目录
  // 默认指向项目跟目录，我们把 vue(渲染进程) 代码全部搬到 src/render 下
  root: join(__dirname, 'src/render'),
  // 通过 .env 配置端口，能够让 electron 加载到正确的地址
  port: +process.env.PORT,
  // 打包后的 vue 项目引入 js、css、favicon 等资源路径
  base: './',
}

export default config
```

#### 启动脚本配置

```json
{
  "main": "src/main/_.js",
  "scripts": {
    "dev": "npm run dev:all",
    "dev:all": "concurrently -n=vue,ele -c=green,blue \"npm run dev:vue\" \"npm run dev:ele\"",
    "dev:vue": "vite",
    "dev:ele": "node script/build --env=development --watch",
    "build:vue": "vite build",
    "build:ele": "node script/build --env=production",
    "build": "npm run build:vue && npm run build:ele && electron-builder"
  }
}
```

- main `electron` 启动后会加载 main 配置的文件
- dev:all 使用 `concurrently` 同时启动 `dev:vue`、`dev:ele`
- dev:ele `electron` 开发模式脚本，通过传入 `--watch` 表示 rollup 监听主进程变化自动编译
- build 使用 `electron-builder` 打包

#### 启动一下试试
```bash
$ yarn dev  

yarn run v1.22.4                                                                                    
$ npm run dev:all                                                                                   
                                                                                                    
> electron-vue@0.0.1 dev:all D:\github\electron-vue-vite                                            
> concurrently -n=vue,ele -c=green,blue "npm run dev:vue" "npm run dev:ele"                         
                                                                                                    
[ele]                                                                                               
[ele] > electron-vue@0.0.1 dev:ele D:\github\electron-vue-vite                                      
[ele] > node script/build --env=development --watch                                                 
[ele]                                                                                               
[vue]                                                                                               
[vue] > electron-vue@0.0.1 dev:vue D:\github\electron-vue-vite                                      
[vue] > vite                                                                                        
[vue]                                                                                               
[vue] vite v1.0.0-rc.4                                                                              
[vue]                                                                                               
[vue]   Dev server running at:                                                                      
[vue]   > Network:  http://192.168.1.9:3344/                                                        
[vue]   > Network:  http://192.168.119.1:3344/                                                      
[vue]   > Network:  http://10.0.60.32:3344/                                                         
[vue]   > Local:    http://localhost:3344/                                                          
[vue]                                                                                               
[ele] [2020-08-17T08:57:11.850Z] [electron-connect] [server] started electron process: 1488         
[ele] [2020-08-17T08:57:11.851Z] [electron-connect] [server] server created and listening on 30080  
[ele]                                                                                              
```

#### 尾巴
- 2019 款 13 寸 mac-pro 启动速度 4秒 左右
- 奔腾 G4560 台机 CUP 神舟笔记本启动速度 6 秒左右
- 毋庸置疑 vite 的方案比起 @vue/cli、umi、create-react-app 这类基于 webpack 的脚手架启动这块的优势大的多滴多
- 技术总是飞快的迭代、进步，目的都是解决一些已经存在、或即将到来的问题；继续治疗、学习起来、加油哇~
