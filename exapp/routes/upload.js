var express = require('express');
var router = express.Router();
var fs = require('fs');
// 文件上传中间件
var multer = require('multer');


const Config = require('../utils/config')

/* GET home page. */
// router.get('/', user.getUsers );
// router.get('/selUser', user.selUser );

// 判断文件夹是否创建
var createFolder = function(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        fs.mkdirSync(folder);
    }  
};

// 定义文件保存路径
var uploadFolder = './public/profile';

createFolder(uploadFolder);

// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        console.log(req.url) // 获取url--备用--判断
        cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        var fileformat = (file.originalname).split('.');
        cb(null, file.fieldname + '-' + Date.now() +'.'+fileformat[fileformat.length-1]);  
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })


router.post('/profile', upload.single('avatar'), function (req, res, next) {
    var file = req.file;

    // console.log('文件类型：%s', file.mimetype);
    // console.log('原始文件名：%s', file.originalname);
    // console.log('文件大小：%s', file.size);
    // console.log('文件保存路径：%s', file.path);
    let pathArr = file.path.split('\\');
    res.send({
        status: '200',
        filepath: Config.BASE_URL + pathArr[1] +'/'+ pathArr[2]
    });
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
})  

module.exports = router;
