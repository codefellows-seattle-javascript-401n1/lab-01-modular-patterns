'use strict';

const greeter = {};

greeter.greeting = function(name) {
  var input = name;
  input = process.argv[2] || 'sam';
  console.log('hello ' + input);
  return 'hello ' + input;
};
greeter.greeting('Sam');

module.exports = greeter;
