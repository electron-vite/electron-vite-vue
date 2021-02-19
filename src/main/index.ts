/**
 * electron 主文件
 */
import { join } from 'path'
import { app } from 'electron'
import { Login, Main } from './window'
import store, { USER_INFO } from '@src/common/utils/store.ts'
import { User } from './interfaces/user'
import dotenv from 'dotenv'
import {
  LOGIN,
  LOGIN_CLOSE,
  LOGOUT,
} from '@src/common/constant/event.ts'

dotenv.config({ path: join(__dirname, '../../.env') })

function init() {
  const loginWin = new Login()
  const mainWin = new Main()

  const mainOpen = () => {
    mainWin.open()
    const unsubscribe = mainWin.subscribe(LOGOUT, win => {
      unsubscribe()
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
