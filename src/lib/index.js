'use strict';

var nakedGunQuotes = require('./quotes.json');

var randomItem = function(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array');
  }
  return arr[Math.floor(Math.random() * arr.length)];
};

exports.all    = nakedGunQuotes;
exports.random = function() {
  return randomItem(nakedGunQuotes);
};
