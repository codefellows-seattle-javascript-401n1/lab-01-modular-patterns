'use strict';

module.exports = function greet(name) {
  const input = name || 'my friend';
  console.log('Hello ' + input);
  return 'Hello ' + input;
};

console.log(process.argv);
