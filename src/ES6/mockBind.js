

Function.prototype.mockBind = function (context) {
    const self = this;
    return function () {
        return self.apply(context, arguments);
    }
}

let testObj = {name: 'liu'};

function test(params) {
    console.log(this.name);
}

let fun = test.bind(testObj);

fun();

//call用法：call接受多个参数（1:需要指定的this，。。。。）
function testCall(a, b) {
    console.log(this.name);
    console.log(a, b);
}

testCall.call(testObj, 1, 2, 3);


//apply用法：apply接受两个参数（1: 需要指定的this，2: 可以是数组也可以是类数组）
testCall.apply(testObj, [1, 2])//数组从左到右对应函数参数从做到右的顺序

//如何将类数组转换为数组：Array.prototype.slice.call(arguments)
