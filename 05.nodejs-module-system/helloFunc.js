/**
 * Created by wangliang on 30/9/16.
 */
function HelloFunc() {
    var name;
    this.setName = function(thyName) {
        name = thyName;
    };
    this.sayHello = function() {
        console.log('Hello ' + name);
    };
};
module.exports = HelloFunc;