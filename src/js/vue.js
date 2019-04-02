 
 function observe(obj) {
    if(Object.prototype.toString.call(obj) !== "[object Object]"){
        return;
    }

    Object.keys(obj).map(item => {
        defineReactive(obj, item, obj[item]);
    });
}


function defineReactive(obj, key, value){
    if(Object.prototype.toString.call(value) === "[object Object]"){
        observe(obj);
        return;
    }

    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: function(){
            console.log("get value!");
            return value;
        },
        set: function(newValue){
            console.log('set new value');
            value = newValue
        }
    });
}

console.log(1222)
let obj = { a: 12 };
observe(obj);
obj.a = 11;