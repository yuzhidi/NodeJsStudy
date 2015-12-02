//var sys = require（'sys'）
　　var exec = require('child_process').exec;
　　// executes `pwd`
　　exec("adb shell ps  | grep rio | awk '{print $2}'", function(error,stdout,stderr) {
    　　console.log('stdout:\n' + stdout);
    　　console.log('stderr:' + stderr);
    　　if(error !== null) {
        　　console.log('exec error: ' + error);
    　　}
    var result = stdout;
    console.log("################");
    console.log(result);
    console.log(stringToHex(result));
    var arr = /([0-9]+)/g.exec(result);

    if(arr != null) {
        console.log("arr len:"+arr.length);
        for(var i=0,a;a = arr[i];i++) {
            console.log(a);
        }
    }

    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    arr = result.split(String.fromCharCode(10));
    if(arr != null) {
        console.log("arr len:"+arr.length);
        for(var i=0,a;a = arr[i];i++) {
            console.log(i);
            console.log(a);
            console.log(a.length);
        }
    }
    console.log("=============================");
    arr = /([0-9])+[^0-9]+([0-9]+)/g.exec(result);
    if(arr != null) {
        console.log("arr len:"+arr.length);
        for(var i=0,a;a = arr[i];i++) {
            console.log(i);
            console.log(a);
            console.log(a.length);
        }
    }
　　});

    function stringToHex(str){
      var val="";
            for(var i = 0; i < str.length; i++){
                        if(val == "")
                                      val = str.charCodeAt(i).toString(16);
                                else
                                              val += "," + str.charCodeAt(i).toString(16);
                                      }
                  return val;
                      };

