/**
 * Created by wangliang on 29/3/2016.
 */
var fs = require("fs");
var util = require('util');

var net = require('net');

var HOST = '127.0.0.1';
var PORT = 6969;

var client = new net.Socket();
client.connect(PORT, HOST, function() {
    var STARTTIME = 2000;
    //console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // Write a message to the socket as soon as the client is connected, the server will receive it as message from the client
    //client.write('I am Chuck Norris!');
    fs.readFile('minitouch.script', function(err, data) {
        if(err) throw err;
        //array = data.toString().split("\n");
        var array = data.toString().split("\n");
        var outfile = fs.createWriteStream('out.js');
        var basetime;
        var currenttime;
        for(i in array) {
            console.log(array[i]);
            //console.log(/[dcmu]*/.exec(array[i]));
            //outfile.write(array[i]+"\n");
            var lineArray = array[i].split(" ");
            if(i == 0) {
                basetime = lineArray[0];
                console.log("basetime", basetime);
                //outfile.write(codeNcExec());
            }
            currenttime =  lineArray[0];
            var time_out = currenttime - basetime;
            if(time_out < 0) {
                continue;
            }
            time_out += STARTTIME;
            console.log("arrylen", lineArray.length)
            //console.log(codeFunction(time_out));
            var content="";
            for(var i=1;i<lineArray.length;i++) {
                content += " " + lineArray[i];
            }
            console.log("content:", content, "time_out", time_out);
            var send = (function() {
                 var context2 = content;
                return function() {
                    setTimeout(function(){
                        console.log("client write", content);
                        client.write(content);
                    }, time_out);
                }
                } )();
            send();
        }
    });
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



