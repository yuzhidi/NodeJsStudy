/**
 * Created by wangliang on 17/1/18.
 */
// express_cookie.js 文件
var express      = require('express')
var cookieParser = require('cookie-parser')

var app = express()
 app.use(cookieParser())

app.get('/',  function(req, res) {
    res.send("Cookies: ")
    console.log("Cookies: ", req.cookies)
})

app.listen(8081)
console.log("http://127.0.0.1:8081")