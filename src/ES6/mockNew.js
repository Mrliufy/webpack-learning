function MockNew(fn, params) {
    if(typeof fn !== 'function'){
        throw('fn must be a function!');
    }

    const obj = Object.create(fn.prototype);
    const res = fn.apply(obj, params);

    const isObj = typeof res === 'object' && res !== null;
    const isFun = typeof res === 'function';

    return isObj || isFun ? res : obj;
}

