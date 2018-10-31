import sinon from 'sinon'
import { assert } from 'chai'
import { ajax } from './index.js'

describe('XHR', function () {

  let xhr
  let latestRequest

  before(function () {
    xhr = sinon.useFakeXMLHttpRequest()
    xhr.onCreate = function (request) {
      latestRequest = request
    }
  })

  after(function () {
    xhr.restore()
  })

  it('should call the callback', function (done) {
    ajax('http://localhost:3000')
      .then(({response}) => {
        assert.equal(response, 'mock response')
        done()
      })

    latestRequest.respond(200, {'Content-Type': 'text/plain'}, 'mock response')
  })

})
