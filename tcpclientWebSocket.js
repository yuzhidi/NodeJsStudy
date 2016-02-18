var net = require('net');
var WebSocket = require('ws')

var REMOTE_HOST = '127.0.0.1';
var REMOTE_PORT = 6969;

var client = new net.Socket();

var vssport = 9910

function createServer() {
  console.log('Starting WebSocket server for audio on port ' + vssport)
  var wss = new WebSocket.Server({ // Create websocket server
    port: vssport
    , perMessageDeflate: false
  })
  var listeningListener, errorListener
  return new Promise(function(resolve, reject) {
    listeningListener = function() {
      return resolve(wss)
    }
    errorListener = function(err) {
      return reject(err)
    }
    wss.on('listening', listeningListener)
    wss.on('error', errorListener)
  })
    //.finally(function() {
    //  wss.removeListener('listening', listeningListener)
    //  wss.removeListener('error', errorListener)
    //})

  return createServer()
    .then(function(wss) {
      wss.on('connection', function(ws) {
        console.log('connection!!! audio !!!')

        ws.on('message', function(data) {
          console.log('message: ' + data)
        })
        ws.on('close', function() {
          console.log('closed')
        })
      })
    })
}

/////////////////////////////
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
    process.stdout.write(data);
    // Close the client socket completely
    //  client.destroy();

  });

// Add a 'close' event handler for the client socket
  client.on('close', function() {
    console.log('Connection closed');
  });
}

