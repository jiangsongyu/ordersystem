var io = require('socket.io')();

var ClientId = [];
io.on("connection", function(client){
    client.on('connent', function(msg){
        // io.emit("cooking");
        // io.to(client.id).emit('cc', 77);
    })

    client.on('order', function(msg){
        io.emit("newOrder");
        // io.to(client.id).emit('cc', 77);
    })

    client.on('cooking', function(msg){
        io.emit("cook");
        // io.to(client.id).emit('cc', 77);
    })

    client.on('shangcai', function(msg){
        io.emit("shangcai");
    })

    client.on('wan', function(msg){
        console.log(msg)
        io.emit("wanc");
    })

    
})

io.listen(888);