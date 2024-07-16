const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
const serverApp = require('./vite/ssr/server.ts');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.ts')
    }
  })

  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  })

  if (true) {
    // If we are in development mode we load content from localhost server - vite
    // and open the developer tools
    win.loadURL('http://localhost:3034')
    win.webContents.openDevTools()
  } else {
    // In all other cases, load the index.html file from the dist folder
    win.loadURL(`file://${path.join(__dirname, '..' ,'dist', 'index.html')}`)
  }
}

app.whenReady().then(async () => {
  await serverApp();
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})