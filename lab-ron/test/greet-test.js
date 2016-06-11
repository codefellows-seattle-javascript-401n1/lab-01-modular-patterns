'use strict';

const greet = require(__dirname + '/../lib/greetings.js').greet;
const assert = require('assert');

describe('testing module lib/greetings.js', function(){
  describe('testing function greet()', function(){
    it('should return hello + Ron', function(){
      assert.equal(greet('Ron'), 'hello Ron');

    });
  });
});
