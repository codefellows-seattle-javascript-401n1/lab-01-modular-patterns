'use strict';

exports.greet = function(name){
  if(name===undefined){
    return 'hello yunjoo';
  }
  return 'hello '+name;

};

module.exports = exports;
