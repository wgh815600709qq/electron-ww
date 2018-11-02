const { BrowserWindow } = require('electron');
const path = require('path')
class LoginWindow {
    constructor() {
        this.createWindow()
    }

    createWindow() {
        this.loginWindow = new BrowserWindow({
            width: 430,
            height: 340,
            frame: false,
            resizable: false,
            title: 'WW登录',
            movable: true,
            focusable: true,
            alwaysOnTop: true,
            show: false,
            acceptFirstMouse: true
        })

        this.loginWindow.loadURL(path.resolve(__dirname, '../template/login.html'))
        this.loginWindow.once('ready-to-show', () => {
            this.loginWindow.show()
        })
        this.loginWindow.webContents.openDevTools()
        this.loginWindow.on('closed', function () {
            this.loginWindow = null
        })
    }

    show() {

    }

    hide() {

    }
}

module.exports = LoginWindow 