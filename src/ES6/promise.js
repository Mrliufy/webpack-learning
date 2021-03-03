// function mainFunction() {
//     promise(15, 'main').then((res) => console.log('then ended123'));
//     child();
//     console.log('mainFunction ended!');
// }

// import { debug } from "webpack";

// function child(){
//     promise(2, 'child');
//     console.log('child');
// }

// function promise(seconds, target){

//     return new Promise(resolve => {
//         console.log('in promise');
//         setTimeout(() => {
//             resolve(1);
//             console.log(target + 'resolved!');
//         }, seconds * 1000);
//     }).then((res) => console.log(target + 'then'));
// }

// mainFunction();

// console.log(new Promise(resolve => resolve(8)).then(val => alert(val)))

// .then().then(val => alert(val));
// Promise.reject('rejected').then(
//     (val) => {
//         console.log(val);
//     },
//     (val) => {
//         console.log(val);
//     }
// );
// function a() {
//     debugger
//     throw Error('err one');
// }
// function testPromise() {
//     try {
//         new Promise(
//             function (resolve, reject) {
//                 const self = this;
//                 setTimeout(a.bind(self), 200);
//                 // throw('err');
//             }
//         ).then(() => {
//             console.log(123)
//         }).catch(e => {
//             console.log(e)
//         });
//     } catch (error) {
//         // console.log(error);
//     }
// }

// testPromise()

function testPromise() {
    return new Promise((resolve, reject) => {
        resolve(() => {
            console.log('resolved!');
        });
    });
}

console.log(testPromise().then(val => new Promise((rs) => setTimeout(() => {
    console.log('middle');
    rs(12);
}, 2000)).then(val => console.log(val))))

function testResolve() {
    Promise.resolve()
        .then(() => {
            console.log("then1");
            Promise.resolve()
                .then(() => {
                    console.log("then1-1");
                    return 1;
                })
                .then((val) => {
                    console.log(val);
                    console.log("then1-2");
                });
        })
        .then((val) => {
            console.log('outer then:' + val)
            console.log("then2");
        })
        .then(() => {
            console.log("then3");
        })
        .then(() => {
            console.log("then4");
        });
}

testResolve();