var arr0 = "shell:exo;exec logcat".split(";");
console.log("length:" + arr0.length);
for(var  i=0,a;a=arr0[i++];) {
    console.log(i+":"+a);
}
console.log("-------------------");
var arr1 = "shell:exoexec logcat".split(";");
console.log("length:" + arr1.length);
for(var  i=0,a;a=arr1[i++];) {
    console.log(i+":"+a);
}
console.log("-------------------");
var arr = "shell:".split(";");
console.log("length:" + arr.length);
for(var  i=0,a;a=arr[i++];) {
    console.log(i+":"+a);
}
console.log("-------------------");
var arr2 = "shell:exoexec logcat".split(":");
console.log("length:" + arr2.length);
for(var  i=0,a;a=arr2[i++];) {
    console.log(i+":"+a);
}

if("getprop" == "getprop") {
    console.log("getprop");
}
if("getprop" == new String("getprop")) {
    console.log("getprop");
}
if("getprop" == "getprop".split(" ")[0]) {
    console.log("getprop");
}
if("getprop" === "getprop") {
    console.log("34 getprop");
}
if("getprop" === new String("getprop")) {
    console.log("38 getprop");
}
if("getprop" === "getprop".split(" ")[0]) {
    console.log("41 getprop");
}
