const expect = require('chai').expect;

function test(arg = 'Meow') {
    return arg;
}

function test2() {
    // crazy stuff here appeared
    // no return found
}

describe('value: undefined', () => {
    it('expect function to use default value', () => {
        expect(
            test(undefined)
        ).to.be.equal('Meow');
    });

    it('expect void function to return undefined', () => {
        expect(
            test2()
        ).to.be.equal(undefined);
    });
});

describe('value: null', () => {
    it('expect function not to use default value', () => {
        expect(
            test(null)
        ).to.be.null;
    });
});
