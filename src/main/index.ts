import path from 'path'
import dotenv from 'dotenv'
import { app, BrowserWindow } from 'electron'

dotenv.config({ path: path.join(process.cwd(), '.env') })

let win: BrowserWindow = null

function bootstrap() {
  win = new BrowserWindow({})

  if (app.isPackaged) {
    win.loadFile(path.join(__dirname, '../render/index.html'))
  } else {
    win.loadURL(`http://localhost:${process.env.PORT}`)
  }
}

app.whenReady().then(bootstrap)

app.on('window-all-closed', () => { win = null })
