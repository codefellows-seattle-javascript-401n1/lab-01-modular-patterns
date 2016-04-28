'use strict';

module.exports.greet = function(name){
  const person = name || '...not you.';
  return 'Hello ' + person;
};
