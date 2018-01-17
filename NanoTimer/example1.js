/**
 * Created by wangliang on 30/3/2016.
 */
var NanoTimer = require('nanotimer');

var count = 10;


function main(){
    var timer = new NanoTimer();
    console.log(Date.now());
    //timer.setInterval(countDown, '', '1s');
    timer.setTimeout(liftOff, [timer], '10s');
    timer.setTimeout(function() {
        timer.clearInterval();
        console.log(Date.now(),"3s t");
    }, '', '3s');



}

function countDown(){
    console.log('T - ' + count);
    count--;
}

function liftOff(timer){
    timer.clearInterval();
    console.log(Date.now(), 'And we have liftoff!');
}

main();