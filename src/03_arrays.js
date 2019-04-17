let testArray = [1, 2, undefined, undefined, undefined, 3];

console.log(testArray);

console.log('\n');
console.log('array range:');
console.log(testArray[3]);
console.log(testArray[99]);

console.log('\n');
console.log('json stringify:');
let jsonString = JSON.stringify(testArray);
console.log(jsonString);

let parsedArray = JSON.parse(jsonString);
console.log(testArray);
console.log(parsedArray);

console.log('\n');
console.log('fake array length:');
let testArray2 = [1, 2, 3];
console.log(testArray2);

console.log('\n');
testArray2.length = 10;
console.log(testArray2);
console.log(testArray2[5]);

console.log('\n');
console.log(Object.keys(testArray2));
console.log(Object.values(testArray2));
console.log(JSON.stringify(testArray2));
