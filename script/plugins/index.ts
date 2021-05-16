import fs from 'fs'
import path from 'path'
import acorn from 'acorn'
import { Plugin as RollupPlugin } from 'rollup'
import { Plugin as VitePlugin } from 'vite'
import { vue_js_ts_extensions } from './utils'

/**
 * cjs2esm
 * @deprecated
 */
export function cjs2esm() {
  return {
    name: '@rollup/plugin-cjs2esm',
    transform(code: string, filename: string) {
      if (filename.includes(`${path.sep}node_modules${path.sep}`)) {
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
}

/** esm2cjs */
export function esm2cjs(needConvertModules: string[]): VitePlugin {
  const filter = {
    include: (id: string) => vue_js_ts_extensions.includes(path.parse(id).ext)
  }

  return {
    name: 'cxmh:esm2cjs',
    transform(code, id) {
      if (filter.include(id)) {
        const node: any = acorn.parse(code, {
          ecmaVersion: 'latest',
          sourceType: 'module',
        })

        const parsed = path.parse(id)

        let codeRet = code
        node.body.reverse().forEach((item) => {
          console.log(item)
          if (item.type !== 'ImportDeclaration') return
          if (!needConvertModules.includes(item.source.value)) return // 跳过不要转换的模块

          const statr = codeRet.substring(0, item.start)
          const end = codeRet.substring(item.end)
          const deft = item.specifiers.find(({ type }) => type === 'ImportDefaultSpecifier')
          const deftModule = deft ? deft.local.name : ''
          const nameAs = item.specifiers.find(({ type }) => type === 'ImportNamespaceSpecifier')
          const nameAsModule = nameAs ? nameAs.local.name : ''
          const modules = item.
            specifiers
            .filter((({ type }) => type === 'ImportSpecifier'))
            .reduce((acc, cur) => acc.concat(cur.imported.name), [])

          // console.log(deftModule, '|', nameAsModule, '|', modules, '\n----')

          if (nameAsModule) {
            // import * as name from
            codeRet = `${statr}const ${nameAsModule} = require(${item.source.raw})${end}`
          } else if (deftModule && !modules.length) {
            // import name from 'mod'
            codeRet = `${statr}const ${deftModule} = require(${item.source.raw})${end}`
          } else if (deftModule && modules.length) {
            // import name, { name2, name3 } from 'mod'
            codeRet = `${statr}const ${deftModule} = require(${item.source.raw})
const { ${modules.join(', ')} } = ${deftModule}${end}`
          } else {
            // import { name1, name2 } from 'mod'
            codeRet = `${statr}const { ${modules.join(', ')} } = require(${item.source.raw})${end}`
          }
        })

        fs.writeFileSync(path.join(__dirname, '.tmp/') + `${parsed.name + parsed.ext}.js`, codeRet)

        return codeRet
      }
    },
  }
}

/**
 * ensure cwd crrect
 * TODO: __dirname 会被编译成字符串
 * @deprecated
 */
export function ensureCwdCrrect(filename: string): RollupPlugin {
  return {
    name: 'cxmh:ensure-cwd-crrect',
    transform(code, id) {
      if (id === filename) {
        return `
// !!! ensure cwd crrect
process.chdir(__dirname)

${code}
`
      }
    },
  }
}
