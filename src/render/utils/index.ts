
export type RecordClassName = string | Record<string, boolean>
/**
 * 多个 class name -> 支持条件 |
 * class={classnames(['class1', { class2: boolean, class3: boolean }])}
 */
export function classnames(cls: RecordClassName[]) {
  return cls
    .reduce((acc, cur) => {
      if (typeof cur === 'object') {
        for (const [k, v] of Object.entries(cur))
          v && acc.push(k)
        return acc
      } else {
        acc.push(cur)
      }
      return acc
    }, [])
    .filter((_) => _)
    .join(' ')
}
