const mysql = require('mysql');
const Config = require('./config')

module.exports = {
    config: Config.DB_config,
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