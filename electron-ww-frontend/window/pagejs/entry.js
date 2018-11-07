const { ipcRenderer } = require('electron');

document.getElementById('min').addEventListener('click', toMin)
document.getElementById('close').addEventListener('click', toClose)
function toMin() {
    ipcRenderer.send('minWindow', 'mainWindow')
}

function toClose() {
    ipcRenderer.send('closeWindow', 'mainWindow')
}

document.getElementById('name').innerHTML = JSON.parse(localStorage.getItem('userInfo'))._name
document.getElementById('addFriend').addEventListener('click', toOpenAddFriendPannel)

function toOpenAddFriendPannel() {
    ipcRenderer.send('openFriendPannel')
}

var socket = io('http://localhost:8090')
socket.on('connect', function() {
    console.log('connected')
})
socket.on('message', (obj) => {
    console.log(obj)
})