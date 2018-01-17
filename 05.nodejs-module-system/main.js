/**
 * Created by wangliang on 30/9/16.
 */
var hello = require('./hello');
hello.world();

var helloFunc = require('./helloFunc')
var newHelloFunc = new helloFunc();
newHelloFunc.sayHello()
helloFunc.sayHello()
