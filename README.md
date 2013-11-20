validity-string-represents-mongodb-objectid
===========================================

Validity style validator to ensure a property is an Object ID.

## Installation

      npm install validity-string-represents-mongodb-objectid

## Usage

Below is a simple example for usage with schemata:

```js

var validity = require('validity')
  , schemata = require('schemata')
  , stringRepresentsObjectId = require('validity-string-represents-mongodb-objectid')

var schema = schemata(
    { linkedObjectId:
      { type: String
      , validators:
        { all: [stringRepresentsObjectId()]
        }
      }
      , otherObjectId:
      { type: String
      }
    })

schema.validate({ linkedObjectId: 'noidhere', linkedObjectId: 'notanid' }, function (error, valid) {
  // Show the error
  console.log(valid)
})

```

## Credits
[Tom Gallacher](https://github.com/tomgco/) follow me on twitter [@tomgco](http://twitter.com/tomgco)

## Licence
Licensed under the [MIT License](http://opensource.org/licenses/MIT)