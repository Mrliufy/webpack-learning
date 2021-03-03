// const PENDING = 'pending';
// const RESOLVED = 'resolved';
// const REJECTED = 'rejected';

// function MockMockPromise(callback) {
//     const self = this;
//     self.status = PENDING;
//     self.data = undefined;
//     self.resolveCallback = [];
//     self.rejectedCallback = [];

//     function resolve(params) {
//         if(self.status === PENDING){
//             self.status = RESOLVED;
//             self.data = params;
//             for(let i = 0; i < self.resolveCallback.length; i++){
//                 self.resolveCallback[i]();
//             }
//         }
//         // return params;
//     }

//     function reject(params) {
//         if(status === PENDING){
//             self.status = REJECTED;
//             self.data = params;
//             for(let i = 0; i < self.rejectedCallback.length; i++){
//                 self.rejectedCallback[i]();
//             }
//         }
//         // return params;
//     }

//     function then(){

//     }

//     try {
//         callback(resolve, reject);
//     } catch (error) {
//         reject(error);
//         throw (error);
//     }

// }

// function MockPromise(fn) {
//     this.cbs = [];

//     const resolve = (value, passedVal = null) => {
//         let data = value;
//         if(value === undefined || value === undefined){
//             data = passedVal;
//         }
//         setTimeout(() => {
//             this.data = data;
//             this.cbs.forEach((cb) => cb(data));
//         });
//     }

//     fn(resolve);
// }

// MockPromise.prototype.then = function (onResolved) {
//     return new MockPromise((resolve) => {
//         this.cbs.push(() => {
//             const res = onResolved(this.data);
//             if (res instanceof MockPromise) {
//                 res.then(resolve);
//             } else {
//                 resolve(res, this.data);
//             }
//         });
//     });
// };



//注意点：
//1.箭头函数是不会创建自己的上下文；
//2.promise的then方法需要重新返回一个新的promise实例；
//3.注意resolve(value)的值的透传；
//4.then方法如果返回的是promise实例，则需要该返回的promise实例resolve或reject之后才能继续执行上一层的then方法。
function MockPromise(fn) {

    this.resolvedCallBacks = [];

    const resolve = (value, passedVal) => {
        this.data = value;
        if(this.data === null || this.data === undefined){
            this.data = passedVal;
        }
        setTimeout(() => {
            this.resolvedCallBacks.forEach(cb => {
                cb(value);
            });
        });
    }
    fn(resolve);
}

MockPromise.prototype.then = function (resolved) {
    return new MockPromise(
        (resolve) => {
            this.resolvedCallBacks.push(
                () => {
                    const res = resolved(this.data);
                    if (typeof res === 'MockPromise') {
                        //需要注意:如果then方法返回一个promise，
                        //需要当前的promise变为resolved或rejected之后才能继续往下执行then方法
                        res.then(resolve);
                    } else {
                        resolve(res, this.data);
                    }
                }
            );
        }
    );
}

function testMock() {
    return new MockPromise((res) => {
        setTimeout(() => {
            res(1);
        }, 2000);
    });
}

testMock().then(val => { console.log(val) }).then(val => console.log(val));//.then(val => console.log(val));