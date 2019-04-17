let testObj = {
    a: 1,
    b: '2',
    c: undefined,
    d: undefined,
    e: null
};

console.log(testObj);

console.log('\n');
console.log('object fields:');
console.log(testObj.c);
console.log(testObj.hope);

console.log('\n');
console.log('json stringify:');
let jsonString = JSON.stringify(testObj, null, 4);
console.log(jsonString);

console.log('\n');
console.log('object keys and values:');

let keys = Object.keys(testObj);
let values = Object.values(testObj);

console.log(keys);
console.log(values);
