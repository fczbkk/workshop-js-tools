import sinon from 'sinon'
import { assert } from 'chai'
import { callLater } from './index'

describe('Time', function () {

  let clock;

  before(function () {
    clock = sinon.useFakeTimers()
  })

  after(function () {
    clock.restore()
  })

  it('should wait a second', function () {
    const mockFunction = sinon.fake()
    callLater(mockFunction, 1)
    assert(!mockFunction.called)
    clock.tick(999)
    assert(!mockFunction.called)
    clock.tick(1)
    assert(mockFunction.called)
  })

  it('should use specific time', function () {
    const myBirthday = new Date(1978, 3, 18)
    clock = sinon.useFakeTimers(myBirthday.getTime())
    const thisYear = (new Date()).getYear()
    assert.equal(thisYear, 78)
  })

})
