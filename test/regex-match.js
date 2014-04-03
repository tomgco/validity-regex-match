var assert = require('assert')
  , fixtures =
    { valid:
      { id: '0978'
      }
    , invalid:
      { id: 'ab67'
      }
    }
  , regexMatch = require('../')
  , should = require('should')

describe('regex-match', function () {

  it('should return a function', function () {
    var fn = regexMatch(/^[0-9]{4}/)
    assert.equal(typeof fn, 'function')
  })

  it('should succeed with valid object', function (done) {
    var fn = regexMatch(/^[0-9]{4}/, 'must a be a 4 digit pin')

    fn('id', 'Id', fixtures.valid, function (error, valid) {
      assert.equal(valid, undefined)
      done()
    })
  })

  it('should fail without the optional string', function (done) {
    var fn = regexMatch(/^[0-9]{4}/)

    fn('id', 'Id', fixtures.invalid, function (error, valid) {
      assert.equal(valid, 'Id does not match /^[0-9]{4}/')
      done()
    })
  })

  it('should not succeed with invalid object', function (done) {
    var fn = regexMatch(/^[0-9]{4}/, 'must a be a 4 digit pin')

    fn('id', 'Id', fixtures.invalid, function (error, valid) {
      assert.equal(valid, 'Id must a be a 4 digit pin')
      done()
    })
  })

  it('should error if regexMatch is missing regex argument', function () {
    (function() {
      var fn = regexMatch()
    }).should.throw(/regex is not an instance of RegExp/)
  })
})