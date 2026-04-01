const { app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = !app.isPackaged

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      // preload: path.join(__dirname, 'preload.js')   ← falls du preload brauchst
    }
  })

  // WICHTIG: Im Development → Vite Dev-Server
  // Im Build → lokale dist/index.html
  win.loadURL(
    isDev
      ? 'http://localhost:5173'           // Standard-Vite-Port
      : `file://${path.join(__dirname, 'dist/index.html')}`
  )

  // Öffne DevTools im Development
  if (isDev) {
    win.webContents.openDevTools({ mode: 'detach' })
  }
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})