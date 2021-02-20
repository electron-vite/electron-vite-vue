import { BrowserWindow } from 'electron'
import { options, getLoadURL, WinSubscribe, EventCallback } from './utils'

export class Main extends WinSubscribe {

  public static events: Record<string, Array<EventCallback>> = {}

  public win: BrowserWindow | null = null

  public url = getLoadURL()

  constructor(private opts?: Electron.BrowserWindowConstructorOptions) {
    super(Main.events)
  }

  public open() {
    this.win = new BrowserWindow({
      ...options,
      title: '草鞋没号',
      ...this.opts,
    })
    this.win.loadURL(this.url)
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
