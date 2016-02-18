var net = require('net');
var WebSocket = require('ws')
var bufferConcat = require('array-buffer-concat')

var REMOTE_HOST = '127.0.0.1';
var REMOTE_PORT = 6969;

var client = new net.Socket();
var isConnnected = false;

var count = 0;

var queue = require('block-queue');
var qclient = undefined;
var WebSocketServer = require('ws').Server
    , wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });
  isConnnected = true;
  console.log("-------------send");
  qclient = queue(1, function(task, done) {

    setTimeout(function() {
      //console.log(task);
      if(!isConnnected) {
        return;
      }
      try {
        ws.send(task);
      } catch(e) {
        console.error(e);
        isConnnected = false;
        qclient = undefined;
      }

      done();
    }, 100);
  });
  //ws.send('something from server');
  //qclient.push('something from server2');
  //qclient.push('something from server3');
  //qclient.push('something from server4');
});

wss.on('close', function close(code, message) {
  console.log('disconnected'+message);
  qclient = undefined;
});

wss.on('error', function error(err) {
  console.log("error"+err);
});
console.log("no blocking");


var tmpbuffer = undefined;
/**      **/
var bconnectDevice = true;
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

    if(qclient != undefined) {
      console.log("push data");
      if(tmpbuffer == undefined) {
        console.log("count:"+count);
        tmpbuffer = data;
        count++;
      }
      else {
        console.log("bufferconcat");
        tmpbuffer = bufferConcat(tmpbuffer, data);
      }
      if(count == 20) {
        count = 0;
        console.log("qclient push");
        qclient.push(tmpbuffer);
        tmpbuffer = undefined;
      }

    }
  });

// Add a 'close' event handler for the client socket
  client.on('close', function() {
    console.log('Connection closed');
  });
}

function concatTypedArrays(a, b) { // a, b TypedArray of same type
  var c = new (a.constructor)(a.length + b.length);
  c.set(a, 0);
  c.set(b, a.length);
  return c;
}

