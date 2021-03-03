//function execute independently this bind window
//eg as below showed(cb function should be not a arrow function)
//arrow function is a bit different, we discuss it later
let obj = {
    fn: function name(cb) {
        cb();
        console.log('fn this is:' + this);
    }
}

obj.fn(function () {
    console.log('cb this is: ' + this);
});

//Let's see the setTimeout 

function testTimeout(cb) {
    // setTimeout(cb, 0); //setTimeout just like a normal function which can receive an callback
    cb();
}

testTimeout(function () {
    console.log('setTimeout cb:' + this);// window
});

testTimeout(() => {
    console.log('setTimeout cb:' + this);// {} ??? it's wield here actually it's window object
});

//arrow function
//arrow function doesn't create its context
//let's see it
obj = {
    fn: function name(cb) {
        cb();
        console.log('fn this is:' + this);
    }
}

obj.fn(() => {
    console.log('cb this is: ' + this);
});

//arrow function if new an instance
//it will bind the instance automatically, and will not change anymore

function TestTimeoutArrow(cb) {
    const resolve = (params) => {
        console.log(this);
    }
    console.log('testTime fn this:' + this);
    cb(resolve);

}

// testTimeoutArrow.call(obj,() => {
//     console.log('setTimeout cb:' + this);
// });
TestTimeoutArrow.prototype.fn = function (cb) {
    return new TestTimeoutArrow((resolve) => {
        resolve();
        console.log('cb callback:' + this);//this bind the instance
    });
}
const instance = new TestTimeoutArrow((resolve) => {
    resolve();
    console.log('cb callback:' + this);
});
instance.fn();

obj = {
    fn: () => {
        console.log(this); //
    }
}

obj.fn();






