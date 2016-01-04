(function () {
        var x = "Hello!!";      // 我将调用自己
        console.log("call me self");
})();
(function (param) {
        var x = "Hello!!";      // 我将调用自己
        console.log("call me self "+param);
})("haha");
