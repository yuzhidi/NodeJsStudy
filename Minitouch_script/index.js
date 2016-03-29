/**
 * Created by wangliang on 29/3/2016.
 */
var fs = require("fs");
var util = require('util');
//var data = fs.readFileSync("minitouch.script");
//console.log(data.toString());
//var codeTemplete = "setTimeout(function() {console.log("

function codeFunction(string) {
    return util.format("setTimeout(function() {console.log(%s)}, %s);",string, string);
}

fs.readFile('minitouch.script', function(err, data) {
    if(err) throw err;
    //array = data.toString().split("\n");
    var array = data.toString().split("\n");
    var outfile = fs.createWriteStream('out.script');
    var basetime;
    var currenttime;
    outfile.on('error', function(err) { /* error handling */ });
    for(i in array) {
        //console.log(array[i]);
        //outfile.write(array[i]+"\n");
        if(i == 0) {
            basetime = array[i].split(" ")[0];
            console.log("basetime", basetime);
        }
        currenttime = array[i].split(" ")[0];
        var time_out = currenttime - basetime;
        if(time_out < 0) {
            continue;
        }
        //console.log(codeFunction(time_out));
        outfile.write(codeFunction(time_out)+"\n");

    }
    outfile.end();
});

////fs.writeFileSync('out.script', array);
//var file = fs.createWriteStream('array.txt');
//file.on('error', function(err) { /* error handling */ });
//array.forEach(function(v) { file.write(v.join(', ') + '\n'); });
//file.end();