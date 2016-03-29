/**
 * Created by wangliang on 29/3/2016.
 */
var fs = require("fs");
//var data = fs.readFileSync("minitouch.script");
var array;
//console.log(data.toString());
fs.readFile('minitouch.script', function(err, data) {
    if(err) throw err;
    //array = data.toString().split("\n");
    array = data.toString().split("\n");
    var outfile = fs.createWriteStream('array.txt');
    outfile.on('error', function(err) { /* error handling */ });
    for(i in array) {
        console.log(array[i]);
        outfile.write(array[i]+"\n");
    }
    outfile.end();
});

////fs.writeFileSync('out.script', array);
//var file = fs.createWriteStream('array.txt');
//file.on('error', function(err) { /* error handling */ });
//array.forEach(function(v) { file.write(v.join(', ') + '\n'); });
//file.end();