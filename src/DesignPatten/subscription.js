// const event = {
//     clientList: [],
//     listen: function (key, fn) {
//         if (!this.clientList[key]) {
//             this.clientList[key] = [];
//         }
//         this.clientList[key].push(fn);
//         return this.clientList[key].length - 1;
//     },
//     trigger: function () {
//         const key = Array.prototype.shift.call(arguments);
//         if (!this.clientList[key]) {
//             return false;
//         }

//         this.clientList.forEach((fn) => {
//             fn.apply(this, arguments);
//         });

//     }
// }

// class Subscriptions {

//     constructor() {
//         this.clientList = [];
//     }

//     listen(key, fn) {
//         if (!this.clientList[key]) {
//             this.clientList[key] = [];
//         }

//         this.clientList[key].push(fn);
//         return this.clientList[key].length - 1;
//     }

//     trigger() {
//         const key = Array.prototype.shift.call(arguments);
//         if (!this.clientList[key]) {
//             return false;
//         }

//         this.clientList.forEach((fn) => {
//             fn.apply(this, arguments);
//         });
//     }

// }

// export const subscriptionInstance = new Subscriptions();

const clientList = {};

export function listen(key, fn) {
    if (!clientList[key]) {
        clientList[key] = [];
    }

    clientList[key].push(fn);
    return (clientList[key].length - 1) + '#' + key;
}

export function register() {
    const key = Array.prototype.shift(arguments);
    if (!clientList[key]) {
        return false;
    }

    clientList.forEach(fn => {
        fn.apply(this, arguments)
    });
}

export function remove(id) {
    if (!id) {
        return false;
    }

    const paramsArr = id.split('#');
    clientList[paramsArr[1]].splice(paramsArr[0], 0);
}