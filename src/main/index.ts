import path from 'path'
import dotenv from 'dotenv'
import { app, BrowserWindow } from 'electron'

dotenv.config({ path: path.join(process.cwd(), '.env') })

let win: BrowserWindow = null

function getLoadURL() {
  return app.isPackaged
    ? `file://${path.join(__dirname, '../render/index.html')}` // vite 构建后的静态文件地址
    : `http://localhost:${process.env.PORT}` // vite 启动的服务器地址
}

function bootstrap() {
  win = new BrowserWindow({})
  win.loadURL(getLoadURL())
}

app.whenReady().then(bootstrap)

app.on('window-all-closed', () => { win = null })
