import { BrowserWindow, dialog, ipcMain } from "electron";
import { ApiName } from "../common/api-name";
import { join } from 'node:path'
import fs from 'node:fs/promises'


export const useBridgeApi = (win: BrowserWindow) => {
  const getConfigPath = (projectPath: string, fileName?: string) => {
    return fileName ? join(projectPath, "ModProject", "ModExcel", fileName)
      : join(projectPath, "ModProject", "ModExcel")
  }

  // open file dialog
  async function handleSelectPath() {
    const { canceled, filePaths } = await dialog.showOpenDialog(win, {
      properties: ["openDirectory"]
    })
    if (!canceled) {
      return filePaths[0]
    }
  }

  ipcMain.handle(ApiName.selectPath, handleSelectPath)

  // read json file
  async function readJson(_, projectPath: string, fileName: string): Promise<string | undefined> {
    const filePath = getConfigPath(projectPath, fileName)
    const stat = await fs.lstat(filePath)
    console.log(filePath, "==>", stat)
    if (!stat.isFile()) {
      console.log(filePath, 'is not a file.')
      return undefined
    }

    return fs.readFile(filePath, 'utf8')
  }
  ipcMain.handle(ApiName.readJson, readJson)


  // write json file
  async function writeJson(_, projectPath: string, fileName: string, data: string) {
    const filePath = getConfigPath(projectPath, fileName)
    const stat = await fs.lstat(filePath)
    if (!stat || !stat.isFile()) {
      console.log(filePath, 'is not a file.')
      return '[]'
    }

    fs.writeFile(filePath, data, "utf8")
  }
  ipcMain.handle(ApiName.writeJson, writeJson)

  // load project json file
  async function loadProject(_, projectPath: string): Promise<Record<string, string>> {
    const path = getConfigPath(projectPath)
    // get file list
    const files = (await fs.readdir(path)).filter(file => file.endsWith(".json"))
    // read files
    const readings = files.map(file => fs.readFile(getConfigPath(projectPath, file), "utf8"))
    // wait for results
    const results = await Promise.all(readings)
    // assemble return value
    const obj = {}
    files.forEach((file, idx) => {
      obj[file.replace(".json", "")] = results[idx]
    })
    return obj
  }
  ipcMain.handle(ApiName.loadProject, loadProject)
}
