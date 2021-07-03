/**
 * electron 主文件
 */
import { join } from 'path'
import { app, BrowserWindow } from 'electron'
import { Login, Main } from './window'
import store, { USER_INFO } from '@src/common/utils/store'
import { event } from '@src/common/constant'
import { User } from './interfaces/user'
import dotenv from 'dotenv'

dotenv.config({ path: join(__dirname, '../../.env') })

function devEnvSetting(win: BrowserWindow) {
  if (app.isPackaged) return

  win?.webContents.openDevTools() // 开发环境默认打开控制台
  win?.maximize() // 最大环窗口
}

function init() {
  const loginWin = new Login()
  const mainWin = new Main()

  const mainOpen = () => {
    mainWin.open()
    const unsubscribeDevtool = mainWin.subscribe(event.TOGGLE_DEVTOOLS, win => {
      mainWin.win?.webContents.toggleDevTools()
    })
    const unsubscribeLogin = mainWin.subscribe(event.LOGOUT, win => {
      unsubscribeDevtool()
      unsubscribeLogin()
      mainWin.close()
      loginOpen()
    })
    mainWin.win && devEnvSetting(mainWin.win)
  }

  const loginOpen = () => {
    loginWin.open()
    const unsubscribeLogin = loginWin.subscribe(event.LOGIN, win => {
      unsubscribeLogin()
      loginWin.close()
      mainOpen()
    })
    const unsubscribeClose = loginWin.subscribe(event.LOGIN_CLOSE, win => {
      unsubscribeClose()
      loginWin.close()
      app.exit(0)
    })
  }

  const user: User = (store.get(USER_INFO) ?? {}) as User

  // user.token ? mainOpen() : loginOpen()
  mainOpen()

}

app.whenReady().then(init)
