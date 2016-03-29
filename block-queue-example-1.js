var queue = require('block-queue');

var q = queue(1, function(task, done) {
  setTimeout(function() {
    console.log(task);
    done();
  }, 10);
});

for (var i = 0; i < 5; i++) {
  q.push(1);
}
console.log("q.push done");

for (var i = 0; i < 5; i++) {
  q.push(5);
}
setTimeout(function() {
  q.push("haha");
}, 1000);

setTimeout(function() {
  q.push("haha2");
}, 2000);

setTimeout(function() {
  q.push("haha3");
}, 2000);

/********* All tasks should be done in ~10s **********/
