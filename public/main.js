const { app, BrowserWindow } = require('electron')

require('@electron/remote/main').initialize()

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    },
  })

  win.loadURL('http://localhost:3000')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})