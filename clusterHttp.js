var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
if (cluster.isMaster) {
    // 创建工作进程
    for (var i = 0; i < numCPUs; i++) {
         var worker = cluster.fork();
    // console.log('Created worker: ' + worker.pid);
        console.log('Ctreated worker:'+worker.id);
    }
    cluster.on('death', function (worker) {
        console.log('worker ' + worker.pid + ' died');
    });
} else {
    // 工作进程创建http服务器
    console.log("http.Server");
    http.Server(function (req, res) {
        res.writeHead(200);
        res.end("hello world\n");
    }).listen(8000);
}
