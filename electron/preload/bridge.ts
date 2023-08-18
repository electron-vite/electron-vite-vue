import { contextBridge, ipcRenderer } from "electron";
import { ApiName } from "../common/api-name";

(function() {
  let projectPath = "";

  // popup open file dialog
  const selectPath = async () => {
    const selected = await ipcRenderer.invoke(ApiName.selectPath)
    if (selected) {
      projectPath = selected
    }
    return selected
  }

  // read json file
  const readJsonFile = (fileName: string) => {
    return ipcRenderer.invoke(ApiName.readJson, projectPath, fileName)
  }

  // write json file
  const writeJsonFile = (fileName: string, jsonData: any) => {
    return ipcRenderer.invoke(ApiName.writeJson, projectPath, fileName, jsonData)
  }

  // load project
  const loadProject = () => {
    if (!projectPath) {
      return
    }
    return ipcRenderer.invoke(ApiName.loadProject, projectPath)
  }

  const api = {
    selectPath,
    readJsonFile,
    writeJsonFile,
    loadProject,
  }
  window['api'] = api
})()

// contextBridge.exposeInMainWorld('api', {
// })
