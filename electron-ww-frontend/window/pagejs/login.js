const { ipcRenderer } = require('electron');
const axios = require('axios');
const md5 = require('js-md5');
document.getElementById('min').addEventListener('click', toMin)
document.getElementById('close').addEventListener('click', toClose)
document.getElementById('login').addEventListener('click', toLogin)
function toMin() {
    console.log('min')
    ipcRenderer.send('minWindow', 'loginWindow')
}

function toClose() {
    console.log('close')
    ipcRenderer.send('closeWindow', 'loginWindow')
}

function toLogin() {
    console.log('111111')
    var username = document.getElementById('account').value
    var password = document.getElementById('password').value
    password = md5(password)
    axios.post('http://localhost:8888/admin/login', {
        username: username,
        password: password
    }).then(res => {
        if (res.data.code === 'Y200') {
            ipcRenderer.send('loginSuccess')
            localStorage.setItem('token', res.data.token)
            localStorage.setItem('userInfo', JSON.stringify(res.data.data))
        } else {
            alert(res.data.msg)
        }
    })
}