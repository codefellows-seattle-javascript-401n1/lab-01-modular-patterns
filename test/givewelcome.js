'use strict';

const greet = require(__dirname + '/../lib/welcome');
const assert = require('assert');

describe('Test of module lib/welcome.js', function() {
  describe('Testing funciton welcome', function() {
    it('Should return Hello Andrew', function() {
      assert.equal(greet(), 'Hello Andrew');
    });
  });
});
