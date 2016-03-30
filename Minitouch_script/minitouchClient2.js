/**
 * Created by wangliang on 29/3/2016.
 *
 * install and launch minitouch steps from minitouch README
 * 1. run the run.sh in minitouch to install a minitouch to a android devices
 * 1. adb forward tcp:1111 localabstract:minitouch
 * 2. adb shell /data/local/tmp/minitouch
 *
 * minitouch.script record Web click event sent to android device through stf.
 *  you can redirect the output to a file then rename the file minitouch.script
 *  lib/units/device/plugins/touch/index.js
      TouchConsumer.prototype._write = function(chunk) {
      console.log(Date.now(),chunk.toString());
      this.socket.stream.write(chunk)
    }

 */




var fs = require("fs");
var util = require('util');

var net = require('net');

var data = fs.readFileSync('minitouch.script');
var array = data.toString().split("\n");

var HOST = '127.0.0.1';
var PORT = 1111;

var client = new net.Socket();
client.connect(PORT, HOST, function() {

});

client.on('data', function(data) {
    process.stdout.write(data);
    var originalOutfile = fs.createWriteStream('orginaltime.txt');
    var onceOutfileName = util.format("%s.txt", Date.now());
    console.log("outOutfile:", onceOutfileName);
    var onceOutfile = fs.createWriteStream(onceOutfileName);

    var basetime;
    var currenttime;
    var STARTTIME = 1000; //dalay start
    var originalTotal = 0;
    var actureTotal = 0;

    for(i in array) {
        var lineArray = array[i].split(" ");
        if (i == 0) {
            basetime = lineArray[0];
        }
        currenttime = lineArray[0];
        var aTimeout = currenttime - basetime;
        if (aTimeout < 0) {
            continue;
        }
        originalTotal += aTimeout;
        originalOutfile.write(aTimeout.toString()+ " " + originalTotal.toString()+"\n");
        //console.log(aTimeout);
        aTimeout += STARTTIME;
        var tmpCommand = "";
        for (var i = 1; i < lineArray.length; i++) {
            if(i==1) {
                tmpCommand += lineArray[i];
            } else {
                tmpCommand += " " + lineArray[i];
            }

        }
        tmpCommand += "\n";
        var sendbasetime;
        var notSend = true;
        var sendinterval;

        //console.log("tmpCommand:", tmpCommand, "aTimeout", aTimeout);
        var send = (function() {
            var command = tmpCommand;
            return function() {
                setTimeout(function(){
                    //console.log("client write", Date.now(), command);
                    var sendtime = Date.now();
                    //console.log(sendtime);
                    if(notSend) {
                        notSend =false;
                        sendbasetime =  sendtime;
                    }
                    sendinterval = sendtime - sendbasetime;
                    actureTotal += sendinterval;
                    onceOutfile.write(sendinterval.toString()+ " "+ actureTotal.toString()+ "\n");
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