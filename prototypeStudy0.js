/**
 * Created by wangliang on 30/9/16.
 */
var o = {
    a: 2,
    m: function(){
        a = a + 1;
        return a;
    }
};

console.log(o.m()); // 3
// 当调用 o.m 时,'this'指向了o.

var p = Object.create(o);
// p是一个对象, p.[[Prototype]]是o.

var b = Object.create(o);

p.a = 12; // 创建 p 的自身属性a.
console.log(p.m()); // 13
console.log(p.m());
console.log(p.m());

console.log(b.m());
console.log(b.m());
// 调用 p.m 时, 'this'指向 p.
// 又因为 p 继承 o 的 m 函数
// 此时的'this.a' 即 p.a，即 p 的自身属性 'a'
