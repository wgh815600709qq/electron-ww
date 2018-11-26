
const { app, BrowserWindow, ipcMain } = require('electron')
const LoginWindow = require('./controller/login')
const MainWindow = require('./controller/entry')
const FriendPannelWindow = require('./controller/friendPannel')
class App {
  constructor() {
    this.loginWindow = null;
    this.mainWindow = null;
    this.chatWindow = null;
    this.tray = null;
    this.friendPannelWindow = null;
  }

  init() {
    this.initApp();
    this.initIPC();
  }

  initApp() {
    app.on('ready', () => {
      this.createLoginWindow()
    });

    app.on('activate', () => {
      if (this.mainWindow == null) {
        this.createMainWindow();
      } else {
        this.mainWindow.show();
      }
    });

    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit()
      }
    });
  }

  initIPC() {
    ipcMain.on('closeWindow', (event, winName) => {
      this[winName][winName].close()
    })

    ipcMain.on('minWindow', (event, winName) => {
      this[winName][winName].minimize()
    })

    ipcMain.on('loginSuccess', () => {
      this.createMainWindow()
    })

    ipcMain.on('openFriendPannel', () => {
      this.createFriendPannelWindow()
    })
  }


  createMainWindow() {
    this.mainWindow = new MainWindow(function () { this.loginWindow.loginWindow.close() }.bind(this))
  }

  createLoginWindow() {
    this.loginWindow = new LoginWindow()
  }

  createFriendPannelWindow() {
    this.friendPannelWindow = new FriendPannelWindow()
  }

}

new App().init();




