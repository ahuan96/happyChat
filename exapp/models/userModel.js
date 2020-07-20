var dbConnect = require('../utils/dbconnect');
var tools = require('../utils/tools');


getAllUsers = async (req,res) => {
    var sql = 'select * from users'
    var sqlArr = []
    let data = await dbConnect.sqlConnect(sql, sqlArr)
    return data
}

login = async (req, res, next) => {
    let {username,password} = req.body

    let sql = 'select * from users where username = ? and password = ?'
    let sqlArr = [username,password]

    let data = await dbConnect.sqlConnect(sql, sqlArr)
    return data
}

selByName = async (req, res, next) => {

    let {username} = req.body

    let sql = 'select * from users where username = ?'
    let sqlArr = [username]

    let data = await dbConnect.sqlConnect(sql, sqlArr)
    return data
}

selById = async (req, res, next) => {

    let {user_id} = req.query

    let sql = 'select * from users where user_id = ?'
    let sqlArr = [user_id]

    let data = await dbConnect.sqlConnect(sql, sqlArr)
    return data
}

addUser = async (req, res, next) => {
    console.log(2,req.body)
    let {username,password} = req.body
    console.log(3,username)
    console.log(4,password)

    let sql = 'insert into users (username,password) VALUES (?,?)'
    let sqlArr = [username,password]

    let data = await dbConnect.sqlConnect(sql, sqlArr)
    console.log(111)
    console.log(data)
    return data
}

updateUser = async (req, res, next) => {

    let user_id = req.query.user_id
    delete req.query.user_id
    let str = tools.toSqlString(req.query)
    let sql = 'UPDATE users SET ' +str+ ' WHERE user_id = ' + user_id
    console.log('sql',sql)
    let sqlArr = []

    let data = await dbConnect.sqlConnect(sql, sqlArr)
    console.log(111)
    console.log(data)
    return data
}


module.exports = {
    getAllUsers,
    login,
    selByName,
    addUser,
    selById,
    updateUser
}