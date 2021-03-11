/**
 * electron 主文件
 */
import { join } from 'path'
import { app } from 'electron'
import { Login, Main } from './window'
import store, { USER_INFO } from '@src/common/utils/store'
import { User } from './interfaces/user'
import dotenv from 'dotenv'
import {
  LOGIN,
  LOGIN_CLOSE,
  LOGOUT,
  TOGGLE_DEVTOOLS,
} from '@src/common/constant/event'

dotenv.config({ path: join(__dirname, '../../.env') })

function init() {
  const loginWin = new Login()
  const mainWin = new Main()

  const mainOpen = () => {
    mainWin.open()
    const unsubscribeDevtool = mainWin.subscribe(TOGGLE_DEVTOOLS, win => {
      mainWin.win?.webContents.toggleDevTools()
    })
    const unsubscribeLogin = mainWin.subscribe(LOGOUT, win => {
      unsubscribeDevtool()
      unsubscribeLogin()
      mainWin.close()
      loginOpen()
    })
  }
  const loginOpen = () => {
    loginWin.open()
    const unsubscribeLogin = loginWin.subscribe(LOGIN, win => {
      unsubscribeLogin()
      loginWin.close()
      mainOpen()
    })
    const unsubscribeClose = loginWin.subscribe(LOGIN_CLOSE, win => {
      unsubscribeClose()
      loginWin.close()
      app.exit(0)
    })
  }

  const user: User = (store.get(USER_INFO) ?? {}) as User

  if (user.token) {
    mainOpen()
  } else {
    loginOpen()
  }

}

app.whenReady().then(init)
