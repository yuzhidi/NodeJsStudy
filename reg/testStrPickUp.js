var testStr = "now test001 test002";   
var re = /test(\d+)/ig;    
var r = "";   
while(r = re.exec(testStr)) {   
    console.log(r[0] + "  " + r[1]);   
}  
console.log("--------------")
var myReg = /(w+)s(w+)/; 
var str  = "John Smith"; 
var newstr = str.replace(myReg, "$2,,,, $1"); 
console.log(newstr);

console.log("--------------")
var str = "abcdefgname='test'sddfhskshjsfsjdfps"; 
var reg = /name='((\w|-|\s)+)/ig; 
str.replace(reg, function() { 
console.log(arguments.length); //5 
console.log(arguments[1]);//test 
}); 
console.log("--------------")
var shellstr="     shell:am   force-stop     com.testbirda ; ; ;";
reg = /shell:am\s+force-stop\s+(.*)[\s;]*/;
r=reg.exec(shellstr);
console.log(r[0] + "#" +r[1]);
if(/com.testbirda/.test(r[1])) {
    console.log("MATCH:"+r[1]);
}
console.log("--------------")
reg = /shell:am\s+force-stop\s+(.*\b)/;
r=reg.exec(shellstr);
console.log(r[0] + "#" +r[1]);
if(/com.testbirda/.test(r[1])) {
    console.log("MATCH:"+r[1]);
}
console.log("--------------")
var str = 'I love1 my job22';
var reg = /\b[a-z]+(\d+)\b/g;

array = str.match(reg);
for(var i=0,a;a=array[i++];) {
    console.log(a);
}
