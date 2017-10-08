(function(){
  'use strict';

  var should        = require('chai').should();
  var nakedGunQuotes = require('../src/lib/index.js');

  describe('Naked Gun Quotes', function(){
    it('should contains at least 10 items', function(){
      var enoughQuotes = Object.keys(nakedGunQuotes.all).length > 9;
      enoughQuotes.should.equal(true);
    });

    it('should return a quote', function(){
      var quote = nakedGunQuotes.random();
      var enoughLength = quote.length > 2;
      quote.should.be.a('string');
      enoughLength.should.equal(true);
    });

    it('should match Cuban', function(){
      var allQuotes = nakedGunQuotes.all;
      allQuotes[0].should.match(/Cuban/);
    });

    it('should return undefined', function(){
      var allQuotes = nakedGunQuotes.all;
      should.equal(allQuotes[10000], undefined);
    });
  });

  var rewire   = require("rewire");
  var nGQRewire = rewire('../src/lib/index.js');

  describe('Naked Gun Quotes Rewire', function(){
    it('should throw an exception', function(){
      (function() {
        nGQRewire.__set__('nakedGunQuotes', {});
        nGQRewire.random();
      }).should.throw('Expected an array');
    });
  });

})();
