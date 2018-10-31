import {add} from './calculator'

describe('Calculator', function () {

  it('should add two numbers', function () {
    assert.equal(add(1, 2), 3);
  });

});
