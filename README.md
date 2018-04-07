simple-library-boilerplate
===========

[![build status][travis-image]][travis-url]

An awesome boilerplate for creating plain javascript libraries. Including ES6, Webpack, Mocha, ESLint

## Includes

- Use ES6 Syntax but built source running with ES5
- Webpack
- Mocha for Testing
- ESLint with AirBnB Syntax


## Build

### Dev
`webpack -w`

### Production
`NODE_ENV=PRODUCTION webpack -p`


## Using the library

Import the library

`<script src="./lib/library.js"></script>`

`window.library` is now available. It is possible to change the library name in 'src/index.js' 


## Testing

See [test cases](https://github.com/tobiaslins/Simple-Library-Boilerplate/blob/master/test/index.js) for examples.


[npm-image]: https://img.shields.io/npm/v/node-fetch.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/bitinn/node-fetch.svg?style=flat-square
[travis-url]: https://travis-ci.org/tobiaslins/Simple-Library-Boilerplate
