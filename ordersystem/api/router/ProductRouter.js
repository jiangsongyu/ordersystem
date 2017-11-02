var db = require('../db.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

var apiResult = require('../ApiResult.js');

module.exports = {
    Register: function(app){

        app.get('/getgoods', function(request, response){
            db.all('select * from goodslist limit 10', function(rows){
                response.send(rows);
            })    
        }),
        app.get('/getAll', function(request, response){
            db.all('select * from goodslist ', function(rows){
                response.send(rows);
            })    
        }),
        app.get('/fenye', function(request, response){
            db.all('select * from goodslist limit '+request.query.qty*(request.query.pageNo-1)+','+request.query.qty, function(rows){
                // console.log(request)s
                response.send(rows);
            })    
        }),
        app.get('/shanchu', function(request, response){
            console.log(request.query.id)
            db.all('delete from goodslist where id='+request.query.id, function(rows){
                response.send(rows);
            })    
        }),
        app.get('/additem', function(request, response){
            console.log(request.query)
            var price = (request.query.price)*1;
            var title = request.query.title;
            var imgurl = request.query.imgurl;
            var type = request.query.type;
            db.all('insert into goodslist(title,price,imgurl,type) values('+'"'+title+'"'+','+price+','+'"'+imgurl+'"'+','+'"'+type+'"'+')' , function(rows){
                response.send(rows);
            })    
        }),
        app.get('/search', function(request, response){
            db.all('select * from goodslist where title like '+'"%'+request.query.names+'%"', function(rows){
                response.send(rows);
            })    
        }),
        
        app.get('/xiugai', function(request, response){
            console.log(request.query.imgurl)
            db.all('UPDATE goodslist SET title=' + '"' + request.query.title + '"' + ', price=' + request.query.price + ', imgurl=' + '"' +request.query.imgurl + '"' + ', type=' + '"' + request.query.type + '"' + ' WHERE id=' + request.query.id, function(rows){
                // console.log(request)
                response.send(rows);
            })    
        })

    }
}