module.exports = createValidator

function createValidator(regex, optionalErrorText) {

  if (!(regex instanceof RegExp)) throw new Error('regex is not an instance of RegExp')
  optionalErrorText = optionalErrorText || 'does not match ' + regex.toString()

  function validate(key, keyDisplayName, object, cb) {

    // Don't validate the value if it's not set
    if (typeof object[key] === 'undefined' || object[key] === null) return cb(null)

    if (!matching(object[key])) return cb(null, keyDisplayName + ' ' + optionalErrorText)

    return cb(null)
  }

  function matching(value) {
    return (regex).test('' + value)
  }

  return validate

}
