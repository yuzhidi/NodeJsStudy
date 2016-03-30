/**
 * Created by wangliang on 29/3/2016.
 */
var fs = require("fs");
var util = require('util');

var net = require('net');

var data = fs.readFileSync('minitouch.script');
var array = data.toString().split("\n");
//console.log(array);

var HOST = '127.0.0.1';
var PORT = 1111;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

});

client.on('data', function(data) {

    // console.log('DATA: ' + data);
    process.stdout.write(data);
    // Close the client socket completely
    //  client.destroy();
    //console.log(array);
    var basetime;
    var currenttime;
    var STARTTIME = 1000;
    for(i in array) {
        //console.log(array[i]);
        //console.log(/[dcmu]*/.exec(array[i]));
        //outfile.write(array[i]+"\n");
        var lineArray = array[i].split(" ");
        if (i == 0) {
            basetime = lineArray[0];
            //console.log("basetime", basetime);
            //outfile.write(codeNcExec());
        }
        currenttime = lineArray[0];
        var aTimeout = currenttime - basetime;
        if (aTimeout < 0) {
            continue;
        }
        console.log(aTimeout);
        aTimeout += STARTTIME;
        //console.log("arrylen", lineArray.length)
        //console.log(codeFunction(aTimeout));
        var tmpCommand = "";
        for (var i = 1; i < lineArray.length; i++) {
            if(i==1) {
                tmpCommand += lineArray[i];
            } else {
                tmpCommand += " " + lineArray[i];
            }

        }
        tmpCommand += "\n";
        //console.log("tmpCommand:", tmpCommand, "aTimeout", aTimeout);
        var send = (function() {
            var command = tmpCommand;
            return function() {
                setTimeout(function(){
                    //console.log("client write", Date.now(), command);
                    console.log(Date.now());
                    client.write(command);
                }, aTimeout);
            }
        } )();
        send();
    }
});

// Add a 'close' event handler for the client socket
client.on('close', function() {
    console.log('Connection closed');
});