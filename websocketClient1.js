/**
 * Created by wangliang on 18/2/2016.
 */
var WebSocket = require('ws');
var ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open', function open() {
    ws.send('something from client');
});
var count = 0;
var get = false;
var TOTAL = 3;
ws.on('message', function(data, flags) {
    // flags.binary will be set if a binary data is received.
    // flags.masked will be set if the data was masked.
    //console.log(data);
    process.stdout.write(data);
    if(get) {
        if(++count == TOTAL) {
            ws.close();
        }
    }
    else {
        ws.close();
    }
});