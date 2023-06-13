import { app, BrowserWindow, shell, ipcMain } from 'electron'
import { release } from 'node:os'
import { join } from 'node:path'
import './poe/index'
import './gpt/index'
import { browsers } from './tools'

// The built directory structure
//
// ├─┬ dist-electron
// │ ├─┬ main
// │ │ └── index.js    > Electron-Main
// │ └─┬ preload
// │   └── index.js    > Preload-Scripts
// ├─┬ dist
// │ └── index.html    > Electron-Renderer
//
process.env.DIST_ELECTRON = join(__dirname, '..')
process.env.DIST = join(process.env.DIST_ELECTRON, '../dist')
process.env.PUBLIC = process.env.VITE_DEV_SERVER_URL
  ? join(process.env.DIST_ELECTRON, '../public')
  : process.env.DIST

// Disable GPU Acceleration for Windows 7
if (release().startsWith('6.1')) app.disableHardwareAcceleration()

// Set application name for Windows 10+ notifications
if (process.platform === 'win32') app.setAppUserModelId(app.getName())

if (!app.requestSingleInstanceLock()) {
  app.quit()
  process.exit(0)
}

// Remove electron security warnings
// This warning only shows in development mode
// Read more on https://www.electronjs.org/docs/latest/tutorial/security
// process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'

export let win: BrowserWindow | null = null
// Here, you can also use other preload
const preload = join(__dirname, '../preload/index.js')
const url = process.env.VITE_DEV_SERVER_URL
const indexHtml = join(process.env.DIST, 'index.html')

async function createWindow() {
  win = new BrowserWindow({
    title: 'Main window',
    width: 1000,
    height: 800,
    icon: join(process.env.PUBLIC, 'favicon.ico'),
    webPreferences: {
      preload,
      // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
      // Consider using contextBridge.exposeInMainWorld
      // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) { // electron-vite-vue#298
    win.loadURL(url)
    console.log('process.env.VITE_DEV_SERVER_URL', process.env.VITE_DEV_SERVER_URL);
    
    // Open devTool if the app is not packaged
    win.webContents.openDevTools()
  } else {
    win.loadFile(indexHtml)
  }

  // Test actively push message to the Electron-Renderer
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString())
  })

  // Make all links open with the browser, not with the application
  win.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith('https:')) shell.openExternal(url)
    return { action: 'deny' }
  })
  // win.webContents.on('will-navigate', (event, url) => { }) #344
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  win = null
  if (process.platform !== 'darwin') app.quit()
})

app.on('second-instance', () => {
  if (win) {
    // Focus on the main window if the user tried to open another
    if (win.isMinimized()) win.restore()
    win.focus()
  }
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    createWindow()
  }
})

// New window example arg: new windows url
ipcMain.handle('open-win', (_, arg) => {
  const childWindow = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false,
    },
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    childWindow.loadURL(`${url}#${arg}`)
  } else {
    childWindow.loadFile(indexHtml, { hash: arg })
  }
})

ipcMain.handle('stop', async (event, arg) => {
  browsers.forEach(browser => browser.close())
	return true
})


fetch("https://poe.com/api/gql_POST", {
  "headers": {
    "accept": "*/*",
    "accept-language": "zh-CN,zh;q=0.9",
    "content-type": "application/json",
    "poe-formkey": "520a133912dc68714f36a5bcf4848e59",
    "poe-tag-id": "0bc8018cd51c5229e87987cf31f8f89c",
    "poe-tchannel": "poe-chan49-8888-qcbwsgypbumznmwlcfwi",
    "sec-ch-ua": "\"Not.A/Brand\";v=\"8\", \"Chromium\";v=\"114\", \"Google Chrome\";v=\"114\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "Cookie": "p-b=l9xRB8cUvzqnE5Wu0JoLCQ%3D%3D",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin"
  },
  "referrer": "https://poe.com/zhenjie",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"queryName\":\"chatHelpers_sendMessageMutation_Mutation\",\"variables\":{\"chatId\":15454343,\"bot\":\"zhenjie\",\"query\":\"hi\",\"source\":null,\"withChatBreak\":false,\"clientNonce\":\"eBAHfmO3h41BlXK0\",\"sdid\":\"36988d7a-8ed4-4eaa-bbf8-24782e5b5461\"},\"query\":\"mutation chatHelpers_sendMessageMutation_Mutation(\\n  $chatId: BigInt!\\n  $bot: String!\\n  $query: String!\\n  $source: MessageSource\\n  $withChatBreak: Boolean!\\n  $clientNonce: String\\n  $sdid: String\\n) {\\n  messageEdgeCreate(chatId: $chatId, bot: $bot, query: $query, source: $source, withChatBreak: $withChatBreak, clientNonce: $clientNonce, sdid: $sdid) {\\n    chatBreak {\\n      cursor\\n      node {\\n        id\\n        messageId\\n        text\\n        author\\n        suggestedReplies\\n        creationTime\\n        state\\n      }\\n      id\\n    }\\n    message {\\n      cursor\\n      node {\\n        id\\n        messageId\\n        text\\n        author\\n        suggestedReplies\\n        creationTime\\n        state\\n        clientNonce\\n        contentType\\n        chat {\\n          shouldShowDisclaimer\\n          id\\n        }\\n      }\\n      id\\n    }\\n    bot {\\n      id\\n      messageLimit {\\n        dailySent\\n      }\\n    }\\n    status\\n  }\\n}\\n\"}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}).then(res => {
  console.log('ok', res)
}).catch(err=> {
  console.log('err', err)
})
