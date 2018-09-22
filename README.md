Naked Gun Quotes
================

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coveralls-image]][coveralls-url]
[![Dependency Status][david-image]][david-url]
[![NPM version][npm-image]][npm-url]

The best quotes from The Naked Gun movies.

Command Line
------------

### Install

Install this globally and you'll have access to the `naked-gun-quotes` command
anywhere on your system.

```bash
npm i naked-gun-quotes -g
```

### Usage

```console
naked-gun-quotes
Usage: naked-gun-quotes [options]

Options:
  -r, --random   Random quotes
  -a, --all      All quotes
  -h, --help     Show help                                             [boolean]
  -v, --version  Show version number                                   [boolean]
```

API
---

### Install

```bash
npm i naked-gun-quotes --save
```

### Usage

```javascript
var nakedGunQuotes = require('naked-gun-quotes');

nakedGunQuotes.random();
//=> 'Hey!! It's Enrico Palazzo!'
```

### .all

Type: `array`

Get all quotes.

### .random()

Type: `function`

Random quote.

Screenshot
----------

![command line screenshot](https://raw.githubusercontent.com/earl-hacker/naked-gun-quotes/master/docs/screenshot.png)

License
-------

The MIT License (MIT)

[npm-image]: https://img.shields.io/npm/v/naked-gun-quotes.svg
[npm-url]: https://www.npmjs.com/package/naked-gun-quotes
[travis-image]: https://travis-ci.org/earl-hacker/naked-gun-quotes.svg?branch=master
[travis-url]: https://travis-ci.org/earl-hacker/naked-gun-quotes
[coveralls-image]: https://coveralls.io/repos/github/earl-hacker/naked-gun-quotes/badge.svg
[coveralls-url]: https://coveralls.io/github/earl-hacker/naked-gun-quotes
[david-image]: https://david-dm.org/earl-hacker/naked-gun-quotes/status.svg
[david-url]: https://david-dm.org/earl-hacker/naked-gun-quotes
