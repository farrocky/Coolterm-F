import { app, BrowserWindow } from 'electron'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

// ESM uyumlu __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1080,
    height: 720,
    webPreferences: {
      preload: join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    // Dev ortamında vite ile localhost'tan aç
    win.loadURL(process.env.VITE_DEV_SERVER_URL)
  } else {
    // Production ortamında dist/index.html'den yükle
    win.loadFile(join(__dirname, '../dist/index.html')) // ✅ düzeltildi
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
