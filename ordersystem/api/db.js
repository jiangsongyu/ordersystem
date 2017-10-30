var mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port: 3306,
  database: 'pro'
});


module.exports = {
	select: function(tsql, callback){
		pool.query(tsql, function(error, rows){
			callback(rows);
		})
	},
    insert: function(tsql, callback){
        pool.query(tsql, function(error, rows){
            callback(rows);
        })
    },
    update: function(tsql, callback){
        pool.query(tsql, function(error, rows){
            callback(rows);
        })
    },
    delete: function(tsql, callback){
        pool.query(tsql, function(error, rows){
            callback(rows);
        })
    }
}