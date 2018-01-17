/**
 * Created by wangliang on 22/2/17.
 */
var request = require('request');

params = {url: 'http://localhost:10810/devices.json', method: 'POST', body: {key : 'value'}, json: true}
request(params, function (error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body) // 打印google首页
    }
})
// request.post('http://localhost:10810/devices.json', {form:{key:'value'}})
