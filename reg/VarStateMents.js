global_var = true;
function someFunc() {
      another_global = 42;
        var local_var = 5;
}

function sum(start, end) {
      var n = 0;
        //for (i = start; i <= end; i++) {  // wrong
        for (var i = start; i <= end; i++) { // right
                n += i;
        }
        return n;
}

function nested_sum(num) {
      var n = 0;
        // for (i = 1; i <= num; i++) { // wrong
        for (var i = 1; i <= num; i++) {  // right
                n += sum(1, i);
        }
        return n;
}

console.dir({nested:nested_sum(3)}); // Expected value is 10, but i values get tangled


name = "Tim";
function greet() {
      console.dir(name);
        // name is undefined
        // Lots of code, and them later on you have:
        var name; // leo:comment out will cause out put Tim
      console.dir(name);
}
greet();

function greet2(name) {
      console.dir(name);
        // name is "Tim" because functions arguments are special.
        // Lots of code, and them later on you have:
      var name;
      console.dir(name);
}
greet2("Tim");
