var db = require('../db.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

var apiResult = require('../ApiResult.js');

var querystring = require('querystring');

module.exports = {
    Register: function(app){

        app.get('/getOrder', function(request, response){
            db.all('select * from orders limit 10', function(rows){
                response.send(rows);
            })    
        }),
        app.get('/getAllOrder', function(request, response){
            db.all('select * from orders', function(rows){
                response.send(rows);
            })    
        }),
        app.get('/fenyeOrder', function(request, response){
            db.all('select * from orders limit '+request.query.qty*(request.query.pageNo-1)+','+request.query.qty, function(rows){
                // console.log(request)s
                response.send(rows);
            })    
        }),
        
        app.get('/searchOrder', function(request, response){
            db.all('select * from orders where title like '+'"%'+request.query.names+'%"', function(rows){
                response.send(rows);
            })    
        }),
        
        app.get('/shanchuOrder', function(request, response){
            // console.log(request.query.id)
            db.all('delete from orders where id='+request.query.id, function(rows){
                response.send(rows);
            })    
        }),

        app.get('/xiugaiorder', function(request, response){
            console.log(request.query.imgurl)
            db.all('UPDATE orders SET status=' + '"' + request.query.status + '"'  + ' WHERE id=' + request.query.id, function(rows){
                // console.log(request)
                response.send(rows);
            })    
        }), 
        app.get('/addToHis', function(request, response){
            console.log(request.query)
            var price = (request.query.price)*1;
            var title = request.query.title;
            var imgurl = request.query.imgurl;
            var type = request.query.type;
            db.all('insert into goods(title,price,imgurl,type) values('+'"'+title+'"'+','+price+','+'"'+imgurl+'"'+','+'"'+type+'"'+')' , function(rows){
                response.send(rows);
            })    
        }),
        app.get('/getmenu', function(request, response){
            var params = request.query.params;
            console.log(request.query.params);
            db.all('select * from goods where type ='+ '"'+ params +'"', function(rows){
                response.send(rows);
            })
        }),
        app.get('/addOrder', function(request, response){
            var status = request.query.status;
            var data = request.query.data;
            var total = request.query.total;
            var userid = request.query.userid;
            db.all('insert into orders (status,totalPrice,userid) values('+ '"'+status+'",' +'"' +total +'",'+ '"'+userid+'"'+ ')',
            function(rows){
                var j = 0;
                for(var i=0;i<data.length;i++){
                    db.all('insert into ordermenu(orderid,imgurl,name,price,qty,dishid) values('+
                        '"' + rows.insertId + '",' +
                        '"' + data[i].imgurl + '",' +
                        '"' + data[i].name + '",' +
                        '"' + data[i].price + '",' +
                        '"' + data[i].qty + '",' +
                        '"' + data[i].id + '"' 
                    +')', 
                    function(rows1){
                        j++;
                        if(j === data.length){
                            response.send(rows);
                        }
                    })
                }
            });
        }),
        app.get('/selectOrder', function(request, response){
            // response.send("请求成功");
            var userid = request.query.userid;
            db.all('select * from orders where userid = '+ '"' + userid + '"', function(rows){
                response.send(rows);
            })
        }),
        app.get('/selectMenu', function(request,response){
            // response.send("rows");
            var orderid = request.query.orderid;
            db.all('select * from ordermenu where orderid = '+'"' + orderid + '"', function(rows){
                response.send(rows);
            })
        }),
        app.get('/deleteOrder', function(request, response){
            db.all('delete from orders where id='+'"'+request.query.orderid+'"', function(rows){
                response.send(rows);
            })  
        }),
        app.get('/deleteMenu', function(request, response){
            db.all('delete from orders where id='+'"'+request.query.orderid+'"', function(rows){
                response.send(rows);
            })    
        })

    }
}