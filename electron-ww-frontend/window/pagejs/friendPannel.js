const { ipcRenderer } = require('electron');
const axios = require('axios');
document.getElementById('min').addEventListener('click', toMin)
document.getElementById('close').addEventListener('click', toClose)
function toMin() {
    ipcRenderer.send('minWindow', 'friendPannelWindow')
}

function toClose() {
    ipcRenderer.send('closeWindow', 'friendPannelWindow')
}

/***
 * 
 *                 模板
 *              <div class="user-list">
                    <img src="../../assets/images/avatar.png" alt="头像">
                    <span id="name"></span>
                </div>
 */

document.getElementById('search').addEventListener('click', toSearch)

function toSearch() {
    var keyword = document.getElementById('keyword').value
    axios.post('http://localhost:8888/admin/fuzzyMatching', {
        username: keyword,
        userId: JSON.parse(localStorage.getItem('userInfo')).id
    }).then(res => {
        if (res.data.code === 'Y200') {
            var html = createTemplate(res.data.data)
            document.getElementById('template-body').innerHTML = html.join('')
        } else {
            alert('错误')
        }
    })
}

function createTemplate(data) {
    return data.map(it => {
        return `<div class="user-list">
        <img src="../../assets/images/avatar.png" alt="头像">
        <span class="name">昵称：${it._name}</span>
        <span class="username">号码：${it._username}</span>
        ${it.is_friend ? '' :  `<div class="addbtn no-drag" onclick="addFriend(${it.id})">添加好友</div>` } 
        </div>`
    })
}


function addFriend(toId) {
    console.log('...')
    // var toId = e.target.dataset.id
    var userInfo = JSON.parse(localStorage.getItem('userInfo'))
    var fromId = userInfo.id
    axios.post('http://localhost:8888/admin/applyFriend', {
        fromId: fromId,
        toId: toId,
        ww: userInfo._username,
        name: userInfo._name
    }).then(res => {
        if  (res.data.code == 'Y200') {
            alert('好友申请已提交，请耐心等待')
        } else {
            console.warn(res)
        }
    })
}


