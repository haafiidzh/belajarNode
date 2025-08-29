const thisIsFunction = require('./test')
function test(vv) {
    return console.log(vv);
}

console.log(test('halo'));
console.log(thisIsFunction());