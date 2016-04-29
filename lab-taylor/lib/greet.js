'use strict';

exports.greet = function(name) {
  let n = Array.isArray(name) ? name[2] : name;
  return `hello ${n}`;
};
