'use strict';

function greet(name){
  const person = name || '...not you.';
  console.log('Hello ' + process.argv[2]);
  return 'Hello ' + person;
}
greet();

module.exports.greet = greet;
