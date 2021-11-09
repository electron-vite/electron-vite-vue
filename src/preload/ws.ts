/**
 * Ws client side
 */

/** Inject ws client-side code */
export function injectWsCode(options: {
  host: string
  port: string | number
}) {
  const oScript = document.createElement('script')
  oScript.id = 'ws-preload-hot-reload'

  oScript.innerHTML = `
${__ws_hot_reload_for_preload.toString()}
${__ws_hot_reload_for_preload.name}(${JSON.stringify(options)})
`

  document.body.appendChild(oScript)
}

function __ws_hot_reload_for_preload(options: { host: string; port: string | number }) {
  const ws = new WebSocket(`ws://${options.host}:${options.port}`)
  ws.onmessage = function (ev) {
    try {
      console.log('[preload] ws.onmessage:', ev.data)

      const data = JSON.parse(ev.data) // { "cmd": "string", data: "string|number" }

      if (data.cmd === 'reload') {
        setTimeout(() => window.location.reload(), 999)
      }
    } catch (error) {
      console.warn(`ws.onmessage should be accept "JSON.string" formatted string.`)
      console.error(error)
    }
  }
}
