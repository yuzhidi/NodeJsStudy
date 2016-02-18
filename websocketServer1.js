/**
 * Created by wangliang on 18/2/2016.
 */
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

    ws.send('something from server');
});

console.log("no blocking");