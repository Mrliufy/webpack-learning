function * generator(){
    console.log('generator started!');
    // yield 12;
    // console.log(12);
    // yield 13;
    console.log(13);
}

const ge = generator();
console.log(ge)
console.log('next:' + ge.next().value);
