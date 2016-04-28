'use strict';

const greeting = require(__dirname + '/../lib/greet');
const assert = require('assert');


describe('Greeting', function() {
  describe('Testing greet module', function() {
    it('should return "Hello ...not you."', function() {
      assert.equal(greeting.greet(), 'Hello ...not you.');
    });
  });
});

describe('Greeting', function() {
  describe('Testing greet module', function() {
    it('should return "Hello Anthony"', function() {
      assert.equal(greeting.greet('Anthony'), 'Hello Anthony');
    });
  });
});
