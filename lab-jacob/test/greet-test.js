'use strict';

const greet = require(__dirname + '/../lib/input');
const assert = require('assert');

describe('testing input', function() {
  describe('testing the greeting', function () {
    it ('should return hello ' + process.argv[2], function() {
      assert.equal(greet(process.argv[2]), 'hello ' + process.argv[2]);
    });
  });
});
