var mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port: 3306,
  database: 'huijiayou'
});


module.exports = {
<<<<<<< HEAD
	all: function(tsql, callback){console.log(tsql);
=======
	all: function(tsql, callback){
   console.log(tsql)
>>>>>>> bc2e77b1f1b2501180b9bc3b9a61eac8c19bd059
		pool.query(tsql, function(error, rows){
			callback(rows);
		})
	}
}