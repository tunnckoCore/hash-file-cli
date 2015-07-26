#!/usr/bin/env node
/*!
 * hasha-cli <https://github.com/tunnckoCore/hasha-cli>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var meow = require('meow')
var exit = process.exit
var hasha = require('hasha')

var cli = meow({
  help: [
    'Usage',
    '  $ hash-file <file>',
    '  $ cat <file> | hash-file',
    '',
    'Example',
    '  $ hash-file unicorn.jpg --algorithm=md5',
    '  1abcb33beeb811dca15f0ac3e47b88d9',
    '',
    'Options',
    '  --algorithm  Cipher algorithm: md5,sha1,sha256,sha512   Default: sha512s',
    '  --encoding   Output encoding: hex,base64,buffer,binary  Default: hex',
    ''
  ]
})

var input = cli.input[0]
if (!input && process.stdin.isTTY) {
  cli.showHelp()
  exit(0)
}

if (input) {
  hasha.fromFile(input, cli.flags, function (err, res) {
    if (err) {
      console.error(err)
      return exit(1)
    }
    console.log(res)
    exit(0)
  })
} else {
  process.stdin.pipe(hasha.stream(cli.flags)).pipe(process.stdout)
}
