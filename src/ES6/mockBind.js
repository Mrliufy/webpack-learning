
//下面的mockBind方法有缺陷，会丢失原型链上的方法；
// Function.prototype.mockBind = function (context) {
//     const self = this;
//     return function () {
//         return self.apply(context, arguments);
//     }
// }

Function.prototype.mockBind = function (context) {
    const self = this;
    let fnBind = function () {
        return self.apply(context, arguments);
    }
    fnBind.prototype = this.prototype;

    return fnBind;
}

let testObj = {name: 'liu'};

function test(params) {
    console.log(this.name);
    console.log(params);
}

let fun = test.mockBind(testObj);

fun(12);

console.log('=========');
//call用法：call接受多个参数（1:需要指定的this，。。。。）
function testCall(a, b) {
    console.log(this.name);
    console.log(a, b);
    return 123;
}

// testCall.call(testObj, 1, 2, 3);

// Function.prototype.mockCall = function (context, ...args) {
//     return this.apply(context, [...args]);
// }

Function.prototype.mockCall = function (context, ...args) {
    const fn = Symbol('fn');
    context[fn] = this;
    const res = context[fn](...args);
    // const res = Function(context.fn(...args));//最后转化之后的代码 res = Function(context.fn.apply(context, args)), 返回一个匿名函数;
    // let params = [...args];
    // const res = eval('context.fn(...params)');//转化之后的代码 res = eval(context.fn.apply(context, args));
    delete context[fn];
    return res;
}

testCall.mockCall(testObj, 23, 22);

console.log('========');

//apply用法：apply接受两个参数（1: 需要指定的this，2: 可以是数组也可以是类数组）
Function.prototype.mockApply = function (context, args) {
    if(!args.length){
        throw('param must be array or similar array!');
    }

    const param = Array.from(args);
    debugger
    const fn = Symbol('fn');
    context[fn] = this;

    const res = context[fn](...param);
    delete context[fn];

    return res;
}

// testCall.apply(testObj, [1, 2])//数组从左到右对应函数参数从做到右的顺序

testCall.mockApply(testObj, [1, 2]);

//如何将类数组转换为数组：Array.prototype.slice.call(arguments)
