validity-regex-match
===========================================

Validity style validator to match simple regex's to a property.

## Installation

      npm install validity-regex-match

## Usage

Below is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , regexMatch = require('validity-regex-match')

var schema = schemata(
    { pinCode:
      { type: String // String as we need a leading 0
      , validators:
        { all: [regexMatch(/[0-9]{4}/)]
        }
      }
      , membershipCode:
      { type: String
      }
    })

schema.validate({ pinCode: '2323', membershipCode: '9238' }, function (error, valid) {
  // Show the error
  console.log(valid)
})

```

## Credits
[Tom Gallacher](https://github.com/tomgco/) follow me on twitter [@tomgco](http://twitter.com/tomgco)

## Licence
Licensed under the [MIT License](http://opensource.org/licenses/MIT)