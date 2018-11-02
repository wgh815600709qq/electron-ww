const { BrowserWindow } = require('electron');
const path = require('path')
class MainWindow {
    constructor(callback) {
        this.createWindow(callback)
    }

    createWindow(callback) {
        this.mainWindow = new BrowserWindow({
            width: 280,
            height: 700,
            frame: false,
            resizable: false,
            title: 'WW主面板',
            movable: true,
            focusable: true,
            alwaysOnTop: true,
            show: false,
            acceptFirstMouse: true,
            x:180,
            y:180
        })

        this.mainWindow.loadURL(path.resolve(__dirname, '../template/entry.html'))
        this.mainWindow.once('ready-to-show', () => {
            this.mainWindow.show()
            callback && callback()
        })
        this.mainWindow.webContents.openDevTools()
        this.mainWindow.on('closed', function () {
            this.mainWindow = null
        })
    }

    show() {

    }

    hide() {

    }
}

module.exports = MainWindow 