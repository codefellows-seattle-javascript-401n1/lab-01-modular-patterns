'use strict';

var greetings = require('../lib/greetings');

const assert = require('assert');

describe('Testing greetings module', function(){
  describe('Testing greetings()', function(){
    it('should return "hello bob"', function(){
      const result = greetings('bob');
      assert.equal(result, 'hello bob');
    });
  });
});
