var str1 = "^The";
var str2 = "free!$";
var patt = /(thin|adaare|^The|free!$)/g;
var re = patt.test("The best things in life are free!");
var pattStr= "/(thin|adaare|^The|free!$)/";
var reObj = new RegExp(pattStr, "g");
console.log(re);
console.log("The best things in life are free!".match(patt));
console.log("---reObj");
console.log("The best things in life are free!".match(reObj));
var arr = "The best things in life are free!".match(patt);
console.log("--- arr:"+arr);
var patt2 = /aaaaaaa/;
console.log("The best things in life are free!".match(patt2));
var str3 = " aaa ddd    "
var str4 = str3.replace(/(^\s+)|(\s+$)/g, "");
console.log("str3:"+str3.length);
console.log("str4:"+str4.length);
//The best things in life are free!".match(patt));

var str5 = "The best things in life are free!";
var str6 = /^The/;
console.log(str6.test(str5));

for(var i=0,a;a=arr[i++];){
    console.log("======");
    console.log(a);
    if(/^The/.test(a)) {
        console.log("   "+a);
    }
    switch(a) {
        case "The" : console.log("switch The");
                break;
        case "free!": console.log("switch free");
                break;
    }
    console.log("-------");
}
console.log("   "+str6.test(arr[0]));

var arr2 = "aaa".match(str1);
console.log("aaa length:"+"aaa".match(/a/g).length);
if(arr2 == null) {
    console.log("null");
} else {
    console.log("arr2.length:"+arr2.length);
}


    console.log("-------i");
    console.log(/aaaa/i.test("AAAAAAAAAAA"));

console.log("STAT|SEND==========================");
var arr = /(STAT|SEND)(.*)/.exec("str:SEND%^@^@^@/data/local/tmp/HelloTestBird.apk,420DATA^@^@^A^@PK^C^D^T^@^H^@^H^@�v�G^@^@^@^@^@^@^@^@^@^@^@^@^S^@^D^@AndroidManifest.xml��^@^@��KO^TA^T�O��^L^L�^A�׀a�ʄV�^Xc�^@ѨA");
if(arr != null) {
    console.log("arr.lenth:"+arr.length);
    for(var i=0, a; a=arr[i++];) {
        console.log(a);
    }
}
str = "dddddddddddddd111111111111";
        if(str.length > 6) {
                      console.log(str.slice(0,5));
                              }
        else {
                      console.log(str);
                              }

console.log("abc===================");
str = "abc";
var arr = /(a)(b)(b)/.exec(str);
if(arr != null) {
    for(var i=0,a;a=arr[i++];) {
        console.log("abb:"+a);
    }
}
console.log("abc===================");
var arr = /(a)(b)(c)/.exec(str);
console.log("arr:"+arr);
if(arr != null) {
    for(var i=0,a;a=arr[i++];) {
        console.log("abb:"+a);
    }
}
console.log("abc test a ===================");
console.log(/a/.test(arr));


console.log("---- kill  0 -------");
var arr = /kill\s+(.*)/.exec("kill    23134 21314  231422 2323 2134134 ");
console.log("arr[1]:"+arr[1]);
var alist = arr[1].split(" ");
console.log("alist 1:"+alist[1]);
for(var i=0, a;a=alist[i++];) {
    console.log("a:"+a);
}
console.log("---- kill -------");
var str = "kill    23134    21300014    231422 2323     2134134 ";
var str2 = str.replace(/\s+/g, " ");
var alist2 = str.split(" ");
console.log("alist 2:"+alist2);
for(var i=0, a;a=alist2[i++];) {
    console.log("a:"+a);
}
///
var str  = ((a=null) == null ? "":a);
console.log(a);
console.log(str);

console.log("---- 360 -------");
var arr = /pm\s+(install|'*uninstall'*|path)\s+(.*)/.exec("pm uninstall com.qihoo360.mobilesafe agdf adfadf dfadf");
if(arr !=null) {
    console.log(arr);
    console.log(/(com\.testbird\.|com\.qihoo360\.)/.test(arr));
}
var arr = /pm\s+(install|'*uninstall'*|path)\s+(.*)/.exec("pm uninstall com.testbird.rio.agent");
if(arr !=null) {
    console.log(arr);
}


console.log("======================= 1216 =============");
var reg = /(^su|^root)[\s\0]/;
console.log("su".length);
console.log(reg.test("su"));
console.log(reg.test("sus"));
console.log(reg.test("susdf"));
console.log("======================= 1216 =============");
console.log(reg.test("su "));
console.log(reg.test("su sdfasf"));
console.log(reg.test("su  "));
console.log(reg.test("su\0"));
console.log(reg.test("su\0\0"));

console.log("========= study timeout =================");
var obj0 =setTimeout(function() {
        console.log("timeout callback executed");
},5000);
var obj1 =setTimeout(function() {
        console.log("timeout callback executed");
},5000);
console.log("========= study timeout =================");
clearTimeout(obj0);
