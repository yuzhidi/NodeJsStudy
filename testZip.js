// /**
//  * Created by wangliang on 18/2/17.
//  */
var fs = require("fs");
// var zip = new require('node-zip')(fs.readFileSync('/tmp/geshuijisuanqi_4.apk', 'binary'), {base64: false, checkCRC32: true});
// console.log("leo test");
// console.log(zip.files['/tmp/testlog'].asText());
var data = fs.readFileSync('/tmp/geshuijisuanqi_4.apk', 'binary');
var zip = new require('node-zip')();
console.log(data);
// zip.file('/tmp/test.file', 'hello there');
// var data = zip.generate({base64:false,compression:'DEFLATE'});
// console.log(data); // ugly data
//
// console.log("----------------");
// zip = new require('node-zip')(data, {base64: false, checkCRC32: true});
// console.log(zip.files['test.file']); // hello there
//
// var fs = require("fs");
// zip.file('/tmp/test.file', 'hello there');
// var data = zip.generate({base64:false,compression:'DEFLATE'});
// fs.writeFileSync('/tmp/test.zip', data, 'binary');