/**
 * function class
 * @param {*} fn 
 */
function Test(fn) {

    const resolve = () => {
        console.log(this);
    }

    fn(resolve);
}

let instance = new Test((resolve) => {
    resolve();
});


/**
 * class
 */

 class TestClass {
    constructor(){
        this.a = 12;
    }
    //Can't use let const var... in the body of the class
    //eg: let a = 12; only function can be defined in the body of the class, 
    //All of the variables should be defined in the constructor
    //but can't use the keyword function
    name(params) {
        
    }
 }

 const instanceTestClass = new TestClass();
 console.log(instanceTestClass);
