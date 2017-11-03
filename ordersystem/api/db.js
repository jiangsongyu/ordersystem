var mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port: 3306,
<<<<<<< HEAD
  database: 'ordersystem'
=======
  database: 'h5_1705'
>>>>>>> 9c52dcbcd95e656cd35a6ae72b2b21db914a3b38
});


module.exports = {
	all: function(tsql, callback){
    // console.log(tsql)
		pool.query(tsql, function(error, rows){
			callback(rows);
		})
	}
}