'use strict';

const greeter = require(__dirname + "/../lib/greeting");
const assert = require('assert');

describe('testing greeting.js', function(){
  describe('testing greeter.greeting', function(){
    it('should return "hello + [name]"', function(){
      assert.equal(greeter.greeting(), 'hello sam')
    })
  })
})
