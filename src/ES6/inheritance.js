class Parent {
    constructor(weight, stature) {
        // this.name = options.name;
        Object.assign(this, { weight, stature });
    }

    parentFn(){
        console.log('Parent class!');
    }

    age(){
        console.log(this.weight);
    }
}

class child extends Parent {
    constructor(weight, stature, school){
        super(weight, stature);
        Object.assign(this, { school });
    }

    childFn(){
        console.log('Child class!');
    }

    parentAge(){
        super.age();
    }
}

const parentInstance = new Parent(70, 1.65);
console.log(parentInstance);
const childInstance = new child(56, 1.68, 'XiAn');
console.log(childInstance);
childInstance.parentAge();
