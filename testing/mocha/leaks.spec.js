const assert = require('assert');

describe('Leaks', function () {

  it('should detect global leak', function () {
    xxx = 'xxx'
    assert(xxx)
  })

});




