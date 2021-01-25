function Parent(val){
    this.value = val;
}

Parent.prototype.say = function(){
    console.log('a = ', this.value);
}

function Child(val){
    Parent.call(this, val);
}

Child.prototype = new Parent();

let item = new Child(12);
item.say();