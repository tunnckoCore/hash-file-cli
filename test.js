/*!
 * hash-file-cli <https://github.com/tunnckoCore/hash-file-cli>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var hashFile = require('./index')
var cmd = require('async-exec-cmd')
var test = require('assertit')

test('create hash from file', function () {
  test('CLI without flags', function (done) {
    cmd('node ./cli.js package.json', function (err, res) {
      test.ifError(err)
      test.equal(res.length, 128)
      done()
    })
  })
  test('CLI with flags', function (done) {
    cmd('node ./cli.js package.json --algorithm=sha1', function (err, res) {
      test.ifError(err)
      test.equal(res.length, 40)
      done()
    })
  })
  test('API without options', function (done) {
    hashFile('./package.json', function (err, hash) {
      test.ifError(err)
      test.equal(hash.length, 128)
      done()
    })
  })
  test('API with options', function (done) {
    hashFile('./package.json', {algorithm: 'sha1'}, function (err, hash) {
      test.ifError(err)
      test.equal(hash.length, 40)
      done()
    })
  })
})
