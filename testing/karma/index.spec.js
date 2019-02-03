import {add, doComplicatedMath} from './calculator'

describe('Calculator', function () {

  it('should add two numbers', function () {
    assert.equal(add(1, 2), 3);
  });

  it('should do some complicated math', function (done) {
    doComplicatedMath(1, function (result) {
      assert.equal(result, 1);
      done();
    });
  });

});
