/**
 * Created by wangliang on 17/1/18.
 */
var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/index.html', function (req, res) {
    res.sendFile( __dirname + "/public/post/" + "index.html" );
})

app.post('/file_upload', function (req, res) {

    console.log("upload file info:")
    console.log(req.files[0]);  // 上传的文件信息

    var des_file = __dirname + "/public/post/uploads/" + req.files[0].originalname;

    console.log("dest file:", des_file)
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                    message:'File uploaded successfully',
                    filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
})

var server = app.listen(8081, "localhost", function () {

    var host = server.address().address
    var port = server.address().port

    console.log("post应用实例，访问地址为 http://%s:%s/index.html", host, port)

})