var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.send('Hello World');
})

var server = app.listen(8081, "localhost", function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例3，访问地址为 http://%s:%s/images/2016-Toyota-Crown-facelift-HD-Wallpapers.jpg", host, port)

})