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
        app.get('/additem', function(request, response){console.log(request.query)
            var price = (request.query.price)*1;
            var tittle = request.query.title;
            var imgurl = request.query.imgurl;
<<<<<<< HEAD
            db.all('insert into goods(title,price,imgurl) values('+'"'+tittle+'"'+','+price+','+'"'+imgurl+'"'+')' , function(rows){
=======
            var type = request.query.type;
            db.all('insert into goods(tittle,price,imgurl,type) values('+'"'+tittle+'"'+','+price+','+'"'+imgurl+'"'+','+'"'+type+'"'+')' , function(rows){
>>>>>>> 07c0e13b297556d8243110f98b136525ab923c47
                response.send(rows);
            })    
        }),
        app.get('/search', function(request, response){
            console.log(request.query.names)
<<<<<<< HEAD
            db.all('select * from goods where title like '+'"%'+request.query.names+'%"', function(rows){
=======
            db.all('select * from goods where tittle like '+'"%'+request.query.names+'%"', function(rows){
>>>>>>> 07c0e13b297556d8243110f98b136525ab923c47
                response.send(rows);
            })    
        })
        ,
        app.get('/xiugai', function(request, response){
            console.log(request.query.imgurl)
            db.all('UPDATE goods SET title=' + '"' + request.query.title + '"' + ', price=' + request.query.price + ', imgurl=' + '"' +request.query.imgurl + '"' + ', type=' + '"' + request.query.type + '"' + ' WHERE id=' + request.query.id, function(rows){
                // console.log(request)
                response.send(rows);
            })    
        })

    }
}