
function toSocket(server){
    // 引入 socket.io
var io = require('socket.io')(server);

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

}

module.exports = toSocket