'use strict';

const assert = require('assert');
const app = require(__dirname + '/../lib/greet');

describe('greet application', () => {
  describe('greet()', () => {
    it('should greet someone by name', () => {
      assert(app.greet('taylor'), 'hello taylor');
    });
  });

  describe('command line tool', () => {
    it('should find parameter from an array', () => {
      const args = ['/path', '/fake/path', 'Mya']; //to mimic process.argv
      assert(app.greet(args), 'hello Mya');
    });
  });
});
