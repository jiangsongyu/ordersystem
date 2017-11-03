var socketServer = require('ws').Server;

var wss = new socketServer({
    port: 888
});

wss.on('connection', function (client) {
    client.on('message', function (_message) {
        wss.broadcast(_message);
        console.log(_message);
    });

    // 退出聊天  
    client.on('close', function() {  
        try{
            this.message = this.message || {};
            // status = 0 表示退出聊天
            this.message.status = 0;
            //把客户端的消息广播给所有在线的用户
            wss.broadcast(this.message);  
        }catch(e){  
            console.log('刷新页面了');  
        }  
    });  
});

//定义广播方法
wss.broadcast = function broadcast(_messageObj) {  
    wss.clients.forEach(function(client) { 
        client.send(_messageObj)
    });  
}; 