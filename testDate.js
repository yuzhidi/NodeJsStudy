console.log(Date.now())
console.log(new Date().getTime())

RE = /^((?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?)\0? (.*)\s*$/;
//    RE = /^((?:[A-Za-z0-9+\/]{4})*(?:[A-Za-z0-9+\/]{2}==|[A-Za-z0-9+\/]{3}=)?) (.*)$/;


buffer = "QAAAAJEZoTiPODt8M+rHSymyL3/TiQOWASDVx8975/ls0/vcekeUcoNurU1UMjxrax46+g8gAzTDiTWbgo4ZIYPRSJx7mjB0p/wUYTTVl6ygoYdTlz9DL3KkfKDslLUmUSK4Ve8g0lsXuUS3eEv5lPUhzW5LUxQegx7TLZbD59xR94eC6x0ikO3hyAxhfRmI16DqypY1VTq8jEqr2lIrYwCkKdtqS7Mh641udJRZVkm5/GEC/wf/J+V+8odEYc2wlATJ8BMFUAoDknjKVfUDOTMqtgUKQt/uCCXUCpzTRloTZYhqOP/EjN4SeUKOTgtx1p55K4STCGjrnZ1ykgP2CF4gBTItDzK5TlYb16uSV+g5LKYcnTuQaRumKYc7V3iFfchJkO31rYntX0OLJ5I+Q/7qYSyRh/TcXNprAE+AVe+BHxHTuYY5W/n9JiEI/ZV4oIGmp7cfqT7nhpXPuL2VXcgA9mHQAJQO/jzFXZH93MZ8g8WEdcGCIBEgSr1inONrboRcoIWHi+U/pcb2SHZEq0A8A2DLJBZbsh9tPZ8tHTE6BQoLRGMcz06trdgNVCh40T6vVqFrQoN9WA86Ml8BkDHMoKpn2FM5jbXRXvjyInDYqDSpE68/libWWkagQaASeaHhXcPm6yowdGotfiBzsaaPyvGoBugHGwJ2OFdOP+wZq36k226htgEAAQA= wangliang@WangLiangs.local"

console.log(RE.exec(buffer));

console.log("");
buffer = "QAAAAIPD0cvVHLLYK4HyjbyYRyi9h/3LVRH+1NsRxk3estuGDogfoPufRFDOEx0tAj2Yl0SrR2jSCtyRvjumNsa4hvGD6HXMKJIMtfAKpPgkcV83AXrbh6pEndzk8wSoF0B87QaxOGRV+cv3PgLba3RxlGfEOoNUvCzZiZgjmb9dLOIQWOowdnpimNoRgJ3lyON691CiSaocgMZaGZ/7khpZqsPLxLzDzD0cts/9wMRFz6rbeW3+udT8KvHQjlHCFRQidV/FwFRbemn0lpXVQEmiIWns8eGNTdJVmwZkFAIeNFvv54TryIKOChCQStKbx4hZTlP+weJ9XLQpwPY3Ypl8qDw/9rq74jVOtE3fNDeW2i3xW2GN91JR5SV7RwkVu3VVdnvRQYQM9ghLU7IKryh4OMntxaiOA6RkfBNJhRrNJ/zhT6reWEyILDpUrXQ2/q8hfJYv2JwiSRp4F8mQ3szKDjsEO7P8cfdtivjzk1wYsTXuqvnirZNwPpckDnDBiFwVg3DBUIeifSYFzIZ1Nm4LmklWpLU5SJTf9woCZ+0I0rcAWVVJahVSEEOuIcQOdDaXsPU0m41NN3153nBBT0+aUUrmPgt7X+wuI3/uBA6qqJdMA8l9snSoN+MqtgIleXFOUy+zo9dGFxeS+dNxxsSr4yaU6kKetwIcQ0DXt7gZbdAn7Q+nBwEAAQA= zzq@sc.10086.cn.defaultbadlist"
console.log(RE.exec(buffer));

console.log("-------->");
var rf=require("fs");
var data=rf.readFileSync("/Users/wangliang/Downloads/adbkey_customer.pub");
console.log(RE.exec(data));
console.log("<-----------");

console.log("");
buffer = "adfaf";
console.log(RE.exec(buffer));

console.log("test null")
var a = null
if (a) console.log(a);

console.log("test undefined")
a = undefined
if (a) console.log(a);

a = "a"
if (a) console.log(a);
