var db = require('../db.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

var apiResult = require('../ApiResult.js');

module.exports = {
    Register: function(app){

        app.get('/getOrder', function(request, response){
            db.all('select * from orders limit 10', function(rows){
                response.send(rows);
            })    
        }),
        app.get('/getAllOrder', function(request, response){
            db.all('select * from goods', function(rows){
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
        })
        

    }
}