const {add} = require('./../calculator');
const assert = require('chai').assert;
const expect = require('chai').expect;


describe('Chai assertion styles', function () {


  describe('Assert', function () {

    it('works pretty much the same as `assert` module from Node', function () {
      assert.equal(add(1, 2), 3);
    });

    it('has some more useful methods', function () {
      const result = add(1, 2);
      assert.isAbove(result, 1);
      assert.isBelow(result, 10);
      assert.isNumber(result);
    });

    it('has useful methods for fuzzy data', function () {
      assert.closeTo(Math.PI, 3, 0.5);
      assert.oneOf('aaa', ['aaa', 'bbb', 'ccc']);
    });

    it('has useful methods for arrays', function () {
      const my_list = ['aaa', 'bbb', 'ccc'];
      assert.include(my_list, 'aaa');
      assert.notInclude(my_list, 'xxx');
    });

    it('has useful methods for objects', function () {
      const my_object = {aaa: {bbb: 'ccc'}};
      assert.property(my_object, 'aaa');
      assert.nestedProperty(my_object, 'aaa.bbb');
      assert.deepPropertyVal(my_object, 'aaa', {bbb: 'ccc'});
    });

  });


  describe('Expect', function () {

    it('may be easier to read', function () {
      expect(add(1, 2)).to.equal(3);
    });

    it('can do anything assert does', function () {
      const result = add(1, 2);
      expect(result).to.be.a('number');
      expect(result).to.be.above(1);
      expect(result).to.be.below(10);
    });

    it('is can be chained', function () {
      expect(Math.PI)
        .to.be.a('number')
        .and.to.be.above(3)
        .and.to.be.below(4)
        .and.to.be.closeTo(3, 0.5)
    });

  });


  describe('Should', function () {

    it('should not be used... ever');

  });


});
