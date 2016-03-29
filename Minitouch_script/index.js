/**
 * Created by wangliang on 29/3/2016.
 */
var fs = require("fs");
var util = require('util');
var exec = require('child_process').exec;

//var data = fs.readFileSync("minitouch.script");
//console.log(data.toString());
//var codeTemplete = "setTimeout(function() {console.log("

function codeFunction(string) {
    return util.format("setTimeout(function()" +
        "\n {console.log(%s)}, %s);",string, string);
}

function codeNcExec() {
    return "var exec = require('child_process').exec;\n";
}
function codeNcSetTimeout(string) {
    return util.format("setTimeout(function() {\n" +
            "   exec('date', function(error, stdout, stderr) {\n"+
            "       if(stdout) console.log(stdout);})" +
            ";}, %s);\n", string);
}

function codeNcCmd(_string , timeout) {
    return util.format("setTimeout(function() {\n" +
        "   exec('echo %s | nc localhost 1111', function(error, stdout, stderr) {\n"+
        "       if(stdout) console.log(stdout);})" +
        ";}, %s);\n", _string, timeout);
}

fs.readFile('minitouch.script', function(err, data) {
    if(err) throw err;
    //array = data.toString().split("\n");
    var array = data.toString().split("\n");
    var outfile = fs.createWriteStream('out.js');
    var basetime;
    var currenttime;
    outfile.on('error', function(err) { /* error handling */ });
    for(i in array) {
        console.log(array[i]);
        //console.log(/[dcmu]*/.exec(array[i]));
        //outfile.write(array[i]+"\n");
        var lineArray = array[i].split(" ");
        if(i == 0) {
            basetime = lineArray[0];
            console.log("basetime", basetime);
            outfile.write(codeNcExec());
        }
        currenttime =  lineArray[0];
        var time_out = currenttime - basetime;
        if(time_out < 0) {
            continue;
        }
        console.log("arrylen", lineArray.length)
        //console.log(codeFunction(time_out));
        var content="";
        for(var i=1;i<lineArray.length;i++) {
            content += " " + lineArray[i];
        }
        console.log("content:", content);
        outfile.write(codeNcCmd(content , time_out));

    }
    outfile.end();
});

////fs.writeFileSync('out.script', array);
//var file = fs.createWriteStream('array.txt');
//file.on('error', function(err) { /* error handling */ });
//array.forEach(function(v) { file.write(v.join(', ') + '\n'); });
//file.end();