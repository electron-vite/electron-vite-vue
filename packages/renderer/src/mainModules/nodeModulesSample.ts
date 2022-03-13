import path from 'path'
import { ipcRenderer } from 'electron'
import sqlite3 from 'sqlite3'

const createSqlite3 = (userDataPath: string): Promise<sqlite3.Database> => {
  return new Promise((resolve, reject) => {
    const dbpath = path.join(userDataPath, 'sqlite3.db')
    console.log(dbpath)
    const db = new sqlite3.Database(dbpath, (error) => {
      if (error) {
        reject(error)
        return
      }
      resolve(db)
    })
  })
}

const sqliteExample = () => {
  ipcRenderer.on('app.getPath', async (_, userDataPath) => {
    try {
      const db = await createSqlite3(userDataPath)
      console.log(db)
    } catch (error) {
      console.error(error)
    }
  })
  ipcRenderer.send('app.getPath', 'userData')

}
export default sqliteExample
