'use strict';

exports.greeting = function(name) {
  const argName = name.length > 0 ? 'Hello ' + name[0] : 'Hello Nobody';
  return argName;
};
