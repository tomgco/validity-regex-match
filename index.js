module.exports = createValidator

function createValidator() {

  function validate(key, keyDisplayName, object, cb) {
    if (!matching(object[key])) {
      return cb(null, keyDisplayName + ' must be an ObjectID')
    }

    return cb(null, undefined)
  }

  return validate

}

/**
* Validates that value is the correct for an ObjectID
*
* @param {String} value to validate
* @return {Boolean} True if value is a valid for a URL
*/
function matching(value) {
  return (/^[0-9a-fA-F]{24}$/).test(value)
}