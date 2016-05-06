'use strict';

exports.greeting = function(name) {
  if (name.length > 0) {
    name.forEach(function(val) {
      return 'Hello ' + val;
    });
  } else {
    return 'Hello Nobody';
  }
};
