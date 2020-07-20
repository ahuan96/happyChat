var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var http = require('http');
const bodyParser = require('body-parser')

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toSocket = require('./utils/socket');

var app = express();
var server = http.createServer(app);
server.listen('3000');


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// 静态资源
app.use(express.static(path.join(__dirname, 'public')));
//post插件
app.use(bodyParser.urlencoded({extended:false }))
app.use(bodyParser.json())

app.use('/', indexRouter);
app.use('/users', usersRouter);

// 建立socket监听
toSocket(server)
