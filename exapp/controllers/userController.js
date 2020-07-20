
var dbConnect = require('../utils/dbconnect')
const { response } = require('express')
var userModel = require('../models/userModel')

// 获取所有用户
getUsers = async (req, res, next) => {
   let data = await userModel.getAllUsers(req, res)
   res.send({
       status:200,
       msg:'',
       list:data
   })
}

// 查询用户
selUser = (req, res, next) => {
    let { user_id,username } = req.query;
    var sql = 'select * from users where user_id = ? or username = ?'
    var sqlArr = [user_id,username]
    var callBack = function (err, data) {
        if (err) {
            console.log('出错了')
            throw err
        } else {
            res.send({
                list: data
            })
        }
    }
    dbConnect.sqlConnect(sql, sqlArr, callBack)
}

// 用户登录
login = async (req, res, next) => {
    console.log('login',req.body)
    let data = await userModel.login(req, res)

    if (data && data.length === 1){
        res.send({
            status:200,
            msg:'登录成功',
            data:data
        })
    }else{
        res.send({
            status:400,
            msg:'登录失败'
        })
    }
}

// 用户注册
sign = async (req, res, next)=>{
    let data = await userModel.selByName(req, res)

    if (data && data.length> 0){
        res.send({
            status:400,
            msg:'该账户已被注册'
        })
    }else{
        let data = await userModel.addUser(req, res)
        if (data && data.affectedRows == 1){
            let data =  await userModel.selByName(req, res)
            res.send({
                status:200,
                msg:'注册成功',
                data:data
            })
        }else{
            res.send({
                status:400,
                msg:'注册失败'
            })
        }
       
    }
}

// 用户登录
updateUser = async (req, res, next) => {
    console.log('login',req.body)
    let data = await userModel.updateUser(req, res)

    if (data && data.affectedRows == 1){
        res.send({
            status:200,
            msg:'修改成功'
        })
    }else{
        res.send({
            status:400,
            msg:'修改失败'
        })
    }
}

module.exports = {
    getUsers,
    selUser,
    login,
    sign,
    updateUser
    
}