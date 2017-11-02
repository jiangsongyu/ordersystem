var db = require('../db.js');
var bodyparser = require('body-parser');
var cookie = require('cookie-parser');
var session = require('express-session');
var url = require('url');
var urlencode = bodyparser.urlencoded({extended: false});
var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要

var apiResult = require('../ApiResult.js');

module.exports = {
    Register: function(app){       
        app.post('/login',urlencode, function(request, response){
            db.all('select * from user where username = '+ '"' +request.body.username + '"' +' and password = ' + '"' + request.body.password + '"', function(rows){
                // console.log(rows);
                var user = {username: request.body.username, password: request.body.password}
                var token = jwt.sign(user, "secret",  {
                    'expiresIn': 1440 // 设置过期时间
                })
                response.send({rows:rows, token:token});
            })   
        }),

        app.post('/register',urlencode, function(request, response){
            db.all('select username from user where username = '+ '"' +request.body.username +'"' , function(rows){
                    if(rows.length > 0){
                        response.send({status:false});
                    }else{
                        db.all('insert into user(username,password) values('+'"'+request.body.username+'"'+','+'"'+request.body.password+'"'+')' , function(rows){
                            response.send({status:true});
                        })   
                    }
            })
            
        })

    }
}