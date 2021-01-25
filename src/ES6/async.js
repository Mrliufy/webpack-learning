async function child() {
    console.log('child');
    return 0;
}

async function sync() {
    console.log(await child());
    console.log('ok');
}

function mainFn() {
    sync();
    console.log('main')
}

mainFn();