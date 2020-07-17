// 使用 express 框架
var app = require('express')();
var express = require("express");
var server = require('http').Server(app);
// 引入 socket.io
var io = require('socket.io')(server);
// 监听 3000 端口
server.listen(3000);
console.log('开始监听3000端口')
// 开启静态资源服务
app.use(express.static("./static"));
// io 各种事件


io.on('connection', function (socket) {
  console.log(socket.id)
  // 设置昵称
  let user = ''
 

  socket.on('setName', function (data) {
    user = data.nickName
    console.log(data);
    console.log(user + 'websocket has connected')
    io.sockets.emit('system', {msg: user + '连接成功' });
  });

  // 监听用户说话
  socket.on('say', function (data) {
    console.log(data)
    io.sockets.emit('chat', { user: user, msg: data.msg });

  });

});
