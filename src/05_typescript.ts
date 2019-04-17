function testNumber(n: number) {
    // Hi-Tech things below
    console.log(n);
}

testNumber(1);
testNumber(undefined);
testNumber(null);


function testObj(o: { a: number }) {
    console.log(o);
}

testObj({ a: 1 });
testObj(undefined);
testObj(null);


function testAny(n: any) {
    console.log(n);
}

testAny({ a: 1 });
testAny(undefined);
testAny(null);

let a: number = null;
let b: number = undefined;

let c: { a: number } = null;
let d: { a: number } = undefined;

let e: { a?: number } = null;
let f: { a?: number } = undefined;
