## 开发任务× √

* 各个窗口回车事件监听
* 图标更换 
* 头像
* 群功能
* 建立socket
* 聊天建立、关闭


```
    方案1： 信息全接受
    登录成功 => 建立socket连接
    定义message对象模型
    {
        from: '',
        to: '',
        type: '', // broadcast 广播消息  msg 常规消息  room 创建消息房间
        content: ''
        time: ''
    }

    方案2： 多端口
    需要维护端口信息

    方案3： 
```


##  架构调整，面向对象写法


* assets 资源文件[图片]
* window 窗口文件  
    * controller 渲染进程控制
    * pagejs 页面逻辑
    * css 层叠样式
    * template 模板
* main.js