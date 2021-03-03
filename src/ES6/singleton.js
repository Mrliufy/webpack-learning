function Singleton(name) {
    this.name = name;
}

Singleton.getInstance = (function () {
    let instance = null;

    return function (name) {
        if (!instance) {
            instance = new Singleton(name);
        }
        return instance;
    }
})();

// let instance1 = Singleton.getInstance('name');
// let instance2 = Singleton.getInstance('name1');
// console.log(instance1 === instance2);


const createSingleton = (
    function (fn) {
        let instance = null;

        return function () {
            if (!instance) {
                return fn.apply(this, arguments);
            }
            
            return instance;
        }
    }
)();