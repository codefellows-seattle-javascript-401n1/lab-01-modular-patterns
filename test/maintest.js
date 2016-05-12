'use strict';

const greet = require(__dirname + '/../index');
const assert = require('assert');

describe('testing module index', function() {
  describe('testing main function', function() {
    it('should return inputed name', function() {
      process.argv = ['year', 'andrew', 'andrew'];
      assert.equal(greet(process.argv[2]), 'hello andrew');
    });
  });
});
