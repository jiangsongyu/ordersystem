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
	all: function(tsql, callback){
<<<<<<< HEAD
   console.log(tsql)
=======
   		console.log(tsql)
>>>>>>> 07c0e13b297556d8243110f98b136525ab923c47
		pool.query(tsql, function(error, rows){
			callback(rows);
		})
	}
}