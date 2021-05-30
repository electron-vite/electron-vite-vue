
## 21-05-08

- vite 源码
  * build 启动 `packages/vite/src/node/cli.ts > cli.command('build [root]')`
  * 加载所有 rollup 插件 `packages/vite/src/node/plugins/index.ts > function resolvePlugins`
  * vite Plugin 继承 RollupPlugin `packages/vite/src/node/plugin.ts > interface Plugin`
  * vite 处理 vue `packages/plugin-vue`

## 21-05-14

- vite 源码
  * vite 内置 `@rollup/plugin-commonjs` 插件 `packages/vite/src/node/build.ts`

## 21-05-15

- rollup、typescript
  * rollup 对 .ts 文件并不会编程(只会编译 .js 文件)
  * typescript 不编译 require
  * `npm` 有个包 `typescript-require`
- electron-store、conf
  * npm 包会有依赖 `process.cwd()` 的情况，默认 `process.cwd() === '/'` 需要正确指向；补丁 `src/common/patch.ts`

## 21-05-30

- typescript

> strict: true 会在 tsc 期间做严格的类型检查

```json
{
  "compilerOptions": {
    "strict": true
  }
}

````
