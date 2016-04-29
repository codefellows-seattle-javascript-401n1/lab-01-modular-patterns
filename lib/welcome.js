'use strict';

module.exports = function greet(name) {
  if (process.argv.length) {
    name = process.argv[2];
  }
  const input = name || 'my friend';
  return 'Hello ' + input;
};
