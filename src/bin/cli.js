#!/usr/bin/env node

'use strict';

var yargs = require('yargs')

  // Random
  .option('r', {
    alias: 'random',
    describe: 'Random quotes'
  })

  // All
  .option('a', {
    alias: 'all',
    describe: 'All quotes'
  })

  // Version
  .alias('v', 'version')

  // Help
  .help('h')
  .alias('h', 'help')
  .usage('Usage: $0 [options]');

var argv = yargs.argv;

var nakedGunQuotes = require('../lib/index.js');

if (argv.random) {
  console.log(nakedGunQuotes.random());
} else if (argv.all) {
  console.log(nakedGunQuotes.all.join('\n'));
} else {
  yargs.showHelp();
}
