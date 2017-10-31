var db = require('../db.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

var apiResult = require('../ApiResult.js');

module.exports = {
    Register: function(app){

        app.get('/getgoods', function(request, response){
            db.all('select * from goods limit 10', function(rows){
                response.send(rows);
            })    
        }),
        app.get('/getAll', function(request, response){
            db.all('select * from goods ', function(rows){
                response.send(rows);
            })    
        }),
        app.get('/fenye', function(request, response){
            db.all('select * from goods limit '+request.query.qty*(request.query.pageNo-1)+','+request.query.qty, function(rows){
                // console.log(request)s
                response.send(rows);
            })    
        }),
        app.get('/shanchu', function(request, response){
            console.log(request.query.id)
            db.all('delete from goods where id='+request.query.id, function(rows){
                response.send(rows);
            })    
        }),
        app.get('/additem', function(request, response){
            db.select('insert into goods(title,price,imgurl) values(request.query.title,request.query.price,request.query.imgurl) ', function(rows){
                response.send(rows);
            })    
        })
        ,
        app.get('/xiugai', function(request, response){
            // console.log(request.query.type)
            db.all('UPDATE goods SET title=' + '"' + request.query.title + '"' + ', price=' + request.query.price + ', imgurl=' + '"' + +request.query.imgurl + '"' + ', type=' + '"' + request.query.type + '"' + ' WHERE id=' + request.query.id, function(rows){
                
                // console.log(request)
                response.send(rows);
            })    
        })

    }
}