// how to node
function newScope() {
    var name = "Tom";
    var age = "28";
    var getName = function() {
        return name;
    };
};

var o = new newScope();
console.log("name:"+o.name);
//console.log("name:"+o.getName());
console.log("======= Lexical Scope  =================");

var name = "outer";
function one() {
      var name = "middle";
      var other = "findme";
      function two() {
         var name = "inner";
         // Here `name` is "inner" and `other` is "findme"
         console.dir({name: name, other: other});
     }
     two();
     // Here `name` is "middle" and `other` is "findme"
     console.dir({name: name, other: other});
}
// execute one
one();

// Here `name` is "outer" and `other` is undefined.
console.dir({name: name});
console.dir({other: other});
