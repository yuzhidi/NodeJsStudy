var express = require('express');
var app = express();

app.get('/', function (req, res) {
    // setTimeout(function(){console.log('2')},2000);
    res.send('Hello World')
})

var server = app.listen(8081, "localhost", function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})