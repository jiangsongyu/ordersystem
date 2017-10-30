var db = require('../db.js');
var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: false});

var apiResult = require('../ApiResult.js');

module.exports = {
    Register: function(app){

        app.get('/getgoods', function(request, response){
            db.select('select * from goods limit 10', function(rows){
                response.send(rows);
            })    
        })


    }
}