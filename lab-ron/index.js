'use strict';

const greet = require(__dirname + '/lib/greetings').greet;

const main = module.exports = function(){
  return greet(process.argv[2]);
};

console.log(main());
