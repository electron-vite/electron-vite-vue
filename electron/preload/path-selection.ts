/*
 * path selection event exchange between main process & renderer
 */
import { ipcRenderer } from "electron"
import { EditorEvent } from "../common/api-name"

process.once("loaded", () => {
  // forward select path event from UI to main process
  window.addEventListener(EditorEvent.WINDOW_MESSAGE, evt => {
    if (evt.data.type == EditorEvent.SELECT_PATH) {
      ipcRenderer.send(EditorEvent.SELECT_PATH)
    }
  })

  // forward path-selected event to view
  ipcRenderer.on(EditorEvent.PATH_SELECTED, (_, paths) => {
    window.postMessage({
      type: EditorEvent.PATH_SELECTED,
      data: paths
    })
  })
})
