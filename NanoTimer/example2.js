/**
 * Created by wangliang on 30/3/2016.
 */

var NanoTimer = require('nanotimer');
var timerObject = new NanoTimer();


var countToOneBillion = function () {
    var i = 0;
    while(i < 1000000000){
        i++;
    }
};

var microsecs = timerObject.time(countToOneBillion, '', 'u');
console.log(microsecs);