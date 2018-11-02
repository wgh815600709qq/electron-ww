const { BrowserWindow } = require('electron');
const path = require('path')
class FriendPannelWindow {
    constructor(callback) {
        this.createWindow(callback)
    }

    createWindow(callback) {
        this.friendPannelWindow = new BrowserWindow({
            width: 900,
            height: 600,
            frame: false,
            resizable: false,
            title: '查找好友',
            movable: true,
            focusable: true,
            alwaysOnTop: false,
            show: false,
            acceptFirstMouse: true
        })

        this.friendPannelWindow.loadURL(path.resolve(__dirname, '../template/friendPannel.html'))
        this.friendPannelWindow.once('ready-to-show', () => {
            this.friendPannelWindow.show()
            callback && callback()
        })
        this.friendPannelWindow.webContents.openDevTools()
        this.friendPannelWindow.on('closed', function () {
            this.friendPannelWindow = null
        })
    }

    show() {

    }

    hide() {

    }
}

module.exports = FriendPannelWindow 