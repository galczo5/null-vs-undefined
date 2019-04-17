function testNumber(n) {
    // Hi-Tech things below
    console.log(n);
}
testNumber(1);
testNumber(undefined);
testNumber(null);
function testObj(o) {
    console.log(o);
}
testObj({ a: 1 });
testObj(undefined);
testObj(null);
function testAny(n) {
    console.log(n);
}
testAny({ a: 1 });
testAny(undefined);
testAny(null);
var a = null;
var b = undefined;
var c = null;
var d = undefined;
var e = null;
var f = undefined;
