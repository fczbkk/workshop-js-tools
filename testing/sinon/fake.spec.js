import sinon from 'sinon'
import { assert } from 'chai'
import { callOnce } from './index.js'

describe('Fake', function () {

  it('should call the callback', function () {
    const mockFunction = sinon.fake()
    const testFunction = callOnce(mockFunction)
    testFunction()
    assert(mockFunction.called)
  })

  it('should call the callback only once', function () {
    const mockFunction = sinon.fake()
    const testFunction = callOnce(mockFunction)
    testFunction()
    testFunction()
    testFunction()
    assert(mockFunction.calledOnce)
  })

  it('should be called in context', function () {
    const mockFunction = sinon.fake()
    const mockObject = {}
    mockFunction.call(mockObject)
    assert(mockFunction.calledOn(mockObject))
  })

  it('should be called with params', function () {
    const mockFunction = sinon.fake()
    mockFunction('aaa', 'bbb', 'ccc')
    assert(mockFunction.calledWith('aaa', 'bbb', 'ccc'))
  })

  it('should have return value', function () {
    const mockFunction = sinon.fake.returns('aaa')
    assert.equal(mockFunction(), 'aaa')
  })

  it('should throw', function () {
    const mockError = new Error('mock error')
    const mockFunction = sinon.fake.throws(mockError)
    assert.throws(mockFunction, mockError)
  })

  it('should replace original method', function () {
    const mockObject = {
      doSomething: function () {
        return 'aaa'
      },
      doSomethingElse: function () {
        return 'bbb'
      }
    }
    sinon.replace(mockObject, 'doSomething', sinon.fake.returns('ccc'))
    assert.equal(mockObject.doSomething(), 'ccc')
    assert.equal(mockObject.doSomethingElse(), 'bbb')
  })

})
