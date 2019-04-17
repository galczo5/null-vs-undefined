const expect = require('chai').expect;

/// FALSE
describe('value false', () => {
    it('expect false to be false :D', () => {
        expect(false == false).to.be.true;
    });

    it('expect type of false to be boolean', () => {
        expect(typeof false).to.be.equal('boolean');
    });
});

/// 0
describe('value 0', () => {
    it('expect 0 to be false', () => {
        expect(0 == false).to.be.true;
    });

    it('expect type of 0 to be number', () => {
        expect(typeof 0).to.be.equal('number');
    });
});

/// ""
describe('value ""', () => {
    it('expect "" to be false', () => {
        expect("" == false).to.be.true;
    });

    it('expect type of "" to be string', () => {
        expect(typeof "").to.be.equal('string');
    });
});

/// NaN
describe('value NaN', () => {
    it('expect NaN to be false', () => {
        if (NaN) {
            throw 'not falsy';
        }
    });

    it('expect NaN to not be equal to false', () => {
        expect(NaN == false).to.be.false;
    });

    it('expect NaN to not be equal to NaN', () => {
        expect(NaN == NaN).to.be.false;
    });

    it('expect NaN to not be equal to 0', () => {
        expect(NaN == 0).to.be.false;
    });

    it('expect type of NaN to be number', () => {
        expect(typeof NaN).to.be.equal('number');
    });
});

/// NULL
describe('value null', () => {
    it('expect null to be false', () => {
        if (null) {
            throw 'not falsy';
        }
    });

    it('expect null to not be equal to false', () => {
        expect(null == false).to.be.false;
    });

    it('expect null to be equal to null', () => {
        expect(null == null).to.be.true;
    });

    it('expect type of null to be object', () => {
        expect(typeof null).to.be.equal('object');
    });
});

/// UNDEFINED
describe('value undefined', () => {
    it('expect undefined to be false', () => {
        if (undefined) {
            throw 'not falsy';
        }
    });

    it('expect undefined to not be equal to false', () => {
        expect(undefined == false).to.be.false;
    });

    it('expect undefined to be equal to undefined', () => {
        expect(undefined == undefined).to.be.true;
    });

    // This one is tricky
    it('expect undefined to be equal to null', () => {
        expect(undefined == null).to.be.true;
    });

    it('expect undefined not to be strictly equal to null', () => {
        expect(undefined === null).to.be.false;
    });

    it('expect type of undefined to be object', () => {
        expect(typeof undefined).to.be.equal('undefined');
    });
});
