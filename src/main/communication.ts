/**
 * Expose something function to renderer
 */
import { BrowserWindow, ipcMain } from 'electron'
import {
  LOGIN,
  LOGOUT,
  TOGGLE_DEVTOOLS,
} from '@/common/constant/event'

export function register(win: BrowserWindow) {
  ipcMain.handle(TOGGLE_DEVTOOLS, () => {
    win.webContents.toggleDevTools()
  })
  ipcMain.handle(LOGOUT, () => { })
}
