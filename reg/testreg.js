var str1 = "^The";
var str2 = "free!$";
var patt = /(thin|adaare|^The|free!$)/g;
var re = patt.test("The best things in life are free!");
console.log(re);
console.log("The best things in life are free!".match(patt));
var arr = "The best things in life are free!".match(patt);
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
