const mysql = require('mysql');

module.exports = {
    config: {
        // host : 'localhost',
        host: '47.95.207.130',
        port: '3306',
        user: 'root',
        password: '123456',
        database: 'test'
    },
    sqlConnect(sql, sqlArr) {
        return new Promise((resolve, reject) => {
            // 创建连接池
            var pool = mysql.createPool(this.config);
            // 连接数据库
            pool.getConnection((err, conn) => {
                if (err) {
                    reject(err)
                } else {
                    // 执行sql
                    conn.query(sql, sqlArr, (err, data) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(data)
                        }
                    });
                }

                //释放连接
                conn.release();
            })

        })

    }
}