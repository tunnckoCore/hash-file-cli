# [hash-file-cli][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Create hash from file. CLI for [hash-file](https://github.com/kevva/hash-file)

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![cov status][cov-img]][cov-url] [![dependency status][david-img]][david-url]


## Install
```
npm i hash-file --save
npm test
```

## API
> For more use-cases see the [tests](./test.js). You also can use it as `hash-file`.

```js
var hashFile = require('hash-file-cli')

hashFile('./package.json', function (err, hash) {
    console.log(hash)
    //=> 'c32f3a677ba94c51e2a0123e3f18caccb7d5fb6ce5ea6d61b2ff816200004426a5dbb73bb7ab2f607ed18f3e63476c785c48341e8645193cd1f7b842ed1adaee'
})

hashFile('./package.json', {algorithm: 'sha1'} function (err, hash) {
    console.log(hash)
    //=> '5baa798212ebfa71da5b0e0b8287220ed54e56b2'
})
```


## CLI
> Just run `npm i -g hash-file` to install it globally.

```
$ hash-file --help

  Usage
    $ hash-file <file>
    $ cat <file> | hash-file

  Example
    $ hash-file unicorn.jpg --algorithm=md5
    1abcb33beeb811dca15f0ac3e47b88d9

  Options
    --algorithm  Cipher algorithm: md5,sha1,sha256,sha512   Default: sha512s
    --encoding   Output encoding: hex,base64,buffer,binary  Default: hex

```


## Related
- [Hasha: A Friendly Crypto API • DailyJS](http://dailyjs.com/2015/06/12/hasha-a-friendly-crypto-api/)
- [hasha](https://github.com/sindresorhus/hasha): Hashing made simple. Get the hash of a buffer/string/stream/file.
- [hasha-cli](https://github.com/tunnckoCore/hasha-cli): Hashing made simple. CLI for `hasha` module. You can use also as API for `hasha`.
- [hash-file](https://github.com/kevva/hash-file): Create a hashed file name
- [hash-obj](https://github.com/sindresorhus/hash-obj): Get the hash of an object


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/hash-file-cli/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/hash-file-cli
[npmjs-img]: https://img.shields.io/npm/v/hash-file-cli.svg?label=hash-file-cli

[license-url]: https://github.com/tunnckoCore/hash-file-cli/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/hash-file-cli
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/hash-file-cli.svg

[cov-url]: https://codeclimate.com/github/tunnckoCore/hash-file-cli
[cov-img]: https://img.shields.io/codeclimate/coverage/github/tunnckoCore/hash-file-cli.svg

[travis-url]: https://travis-ci.org/tunnckoCore/hash-file-cli
[travis-img]: https://img.shields.io/travis/tunnckoCore/hash-file-cli.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/hash-file-cli
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/hash-file-cli.svg

[david-url]: https://david-dm.org/tunnckoCore/hash-file-cli
[david-img]: https://img.shields.io/david/tunnckoCore/hash-file-cli.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
