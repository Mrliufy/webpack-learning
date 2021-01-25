//节流
const throttle = function (fn, interval = 200) {
    let timer;
    let firstCall = true;

    return function () {
        if (firstCall) {
            fn();
            firstCall = false;
            return;
        }

        if (!timer) {
            timer = setTimeout(() => {
                fn();
                clearTimeout(timer);
                timer = null;
            }, interval);
        }
    }
}

const debounce = function (fn, interval = 200) {
    let timer = null;

    return function () {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn();
        }, interval);
    }
}

function test(params) {
    console.log(12);
}

window.onresize = throttle(test, 2000);
