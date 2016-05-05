'use strict';
const greet = require(__dirname + '/lib/welcome');

const main = module.exports = function() {
  return greet('andrew');
};

console.log(main());
