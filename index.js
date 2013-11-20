module.exports = createValidator

function createValidator(regex, optionalErrorText) {

  if (!(regex instanceof RegExp)) throw new Error('regex is not an instance of RegExp')
  optionalErrorText = optionalErrorText || 'does not match ' + regex.toString()

  function validate(key, keyDisplayName, object, cb) {
    if (!matching(object[key])) {
      return cb(null, keyDisplayName + ' ' + optionalErrorText)
    }

    return cb(null, undefined)
  }

 	/**
  * Validates that value is the correct for an ObjectID
  *
  * @param {String} value to validate
  * @return {Boolean} True if value is a valid for a URL
  */
  function matching(value) {
    return (regex).test('' + value)
  }

  return validate

}