const mysql = require('mysql')

let config = {
	host: 'localhost',
	user: 'root',
	password: '123456',
	database: 'test'
};


function DbConnect(){
    const db = mysql.createConnection(config)

    db.connect((err)=>{
        if(err) throw err ;
        console.log('连接成功');
    })

    return db

}

module.exports = DbConnect