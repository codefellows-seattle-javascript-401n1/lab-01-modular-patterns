'use strict';

const greet = require(__dirname + '/../lib/greet');
const assert = require('assert');


describe('Greeting', function() {
  describe('Testing greet module', function() {
    it('should return "Hello undefined"', function() {
      assert.equal(greet(), 'Hello undefined');
    });
  });
});

describe('Greeting', function() {
  describe('Testing greet module', function() {
    it('should return "Hello Anthony"', function() {
      assert.equal(greet('Anthony'), 'Hello Anthony');
    });
  });
});
