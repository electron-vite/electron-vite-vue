import { BrowserWindow, app } from 'electron'
import { options, getLoadURL, WinSubscribe, EventCallback } from './utils'

export class Login extends WinSubscribe {

  public static events: Record<string, Array<EventCallback>> = {}

  public win: BrowserWindow | null = null

  public url = getLoadURL()

  constructor(private opts?: Electron.BrowserWindowConstructorOptions) {
    super(Login.events)
  }

  public open() {
    this.win = new BrowserWindow({
      ...options,
      title: '登录',
      width: 540, // 宽高和拼多多官方保持一致 
      height: 390,
      resizable: false, // 不让缩放
      frame: !app.isPackaged, // 打包后去掉边框
      ...this.opts,
    })
    this.win.loadURL(`${this.url}#/login`) // 这里使用 hash 模式，确保打包后正常加载
    // 窗口居中
    this.win.center()
  }

  public close() {
    if (!this.win) {
      return
    }
    if (this.win.isClosable()) {
      this.win.close()
      this.win = null
    }
  }

}
