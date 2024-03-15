const mysql = require('mysql');

//创建连接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    port:'3306',
    database: 'myblog'
})
con.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('数据库连接成功');
    }
})

// const sql= 'select * from user;';
        // [ RowDataPacket { id: 3, name: '计算机', deleted: 0 } ]
// const sql =`update user set name='alsyon' where id=3; `;
        // Packet {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 0,
        //     serverStatus: 2,
        //     warningCount: 0,
        //     message: '(Rows matched: 1  Changed: 1  Warnings: 0',
        //     protocol41: true,
        //     changedRows: 1
        //   }
// const sql = `insert into user(name) values('许慧敏')`;
        // Packet {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 4,
        //     serverStatus: 2,
        //     warningCount: 0,
        //     message: '',
        //     protocol41: true,
        //     changedRows: 0
        // }
// const sql = `delete from user where id=3;`;
        // Packet {
        //     fieldCount: 0,
        //     affectedRows: 1,
        //     insertId: 0,
        //     serverStatus: 2,
        //     warningCount: 0,
        //     message: '',
        //     protocol41: true,
        //     changedRows: 0
        // }
con.query(sql, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})

con.end();
