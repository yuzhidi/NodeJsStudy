var net = require('net');
var WebSocket = require('ws')

var REMOTE_HOST = '127.0.0.1';
var REMOTE_PORT = 6969;

var client = new net.Socket();
var isConnnected = false;

var queue = require('block-queue');

var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  isConnnected = true;

  var q = queue(1, function(task, done) {
    setTimeout(function() {
      //console.log(task);
      ws.send(task);
      done();
    }, 5000);
  });
  //ws.send('something from server');
  q.push('something from server');
  q.push('something from server');
  q.push('something from server');
});

console.log("no blocking");

/**      **/
var bconnectDevice = false;
if(bconnectDevice) {
  client.connect(REMOTE_PORT, REMOTE_HOST, function() {

    console.log('CONNECTED TO: ' + REMOTE_HOST + ':' + REMOTE_PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
    client.write('I am Chuck Norris!');

  });

// Add a 'data' event handler for the client socket
// data is what the server sent to this socket
  client.on('data', function(data) {

    // console.log('DATA: ' + data);
    //process.stdout.write(data);
    // Close the client socket completely
    //  client.destroy();

  });

// Add a 'close' event handler for the client socket
  client.on('close', function() {
    console.log('Connection closed');
  });
}

