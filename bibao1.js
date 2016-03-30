/**
 * Created by wangliang on 29/3/2016.
 */
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

console.log(add());  // add变量可以作为一个函数使用。
console.log(add());  // add变量可以作为一个函数使用。
console.log(add());  // add变量可以作为一个函数使用。
