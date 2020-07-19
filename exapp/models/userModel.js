var dbConfig = require('../utils/dbconfig');
var tools = require('../utils/tools');


getAllUsers = async (req,res) => {
    var sql = 'select * from users'
    var sqlArr = []
    let data = await dbConfig.sqlConnect(sql, sqlArr)
    return data
}

login = async (req, res, next) => {
    console.log(0,req.body)
    console.log(1,req.body.username)
    console.log(2,req.body.password)
    let {username,password} = req.body

    let sql = 'select * from users where username = ? and password = ?'
    let sqlArr = [username,password]

    let data = await dbConfig.sqlConnect(sql, sqlArr)
    return data
}

selByName = async (req, res, next) => {

    let {username} = req.query

    let sql = 'select * from users where username = ?'
    let sqlArr = [username]

    let data = await dbConfig.sqlConnect(sql, sqlArr)
    return data
}

selById = async (req, res, next) => {

    let {user_id} = req.query

    let sql = 'select * from users where user_id = ?'
    let sqlArr = [user_id]

    let data = await dbConfig.sqlConnect(sql, sqlArr)
    return data
}

addUser = async (req, res, next) => {

    let {username,password} = req.query

    let sql = 'insert into users (username,password) VALUES(?,?)'
    let sqlArr = [username,password]

    let data = await dbConfig.sqlConnect(sql, sqlArr)
    console.log(111)
    console.log(data)
    return data
}

updateUser = async (req, res, next) => {

    let {username,password} = req.query

    let sql = 'insert into users (username,password) VALUES(?,?)'
    let sqlArr = [username,password]

    let data = await dbConfig.sqlConnect(sql, sqlArr)
    console.log(111)
    console.log(data)
    return data
}


module.exports = {
    getAllUsers,
    login,
    selByName,
    addUser,
    selById
}