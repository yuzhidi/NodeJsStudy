function myFunction(a, b) {
        return a * b;
}

var x = myFunction(4, 3) * 2;
console.log(x);

function myFunction(a, b) {
        return a * b;
}
var c = myFunction.call(myObject, 10, 2);  
console.log(c);

function myFunction(a, b) {
        return a * b;
}
myArray = [10,2];
var a = myFunction.apply(myObject, myArray);   // 返回 20
console.log(a);


var myObject = {
firstName:"John",
lastName: "Doe",
fullName: function () {
        return this;
    }
}

console.log("--- study adbkit study ----");

(function myFunction(a, b) {
    var v = a*b;
        console.log(v);
}).call(this, 10, 2);  
