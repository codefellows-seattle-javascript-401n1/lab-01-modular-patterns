'use strict';

const greeting = require(__dirname + '/../lib/greet');
const assert = require('assert');

describe('Greeting', function() {
  describe('Testing greet module', function() {
    it('should return "Hello ...not you."', function() {
      const sayhey = greeting.greet();
      assert.equal(sayhey, 'Hello ...not you.');
    });
  });
});
