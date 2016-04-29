'use strict';

module.exports = function greet(name) {
  if (process.argv.length === 3) {
    name = process.argv[2];
  }
  const input = name || 'Andrew';
  return 'Hello ' + input;
};