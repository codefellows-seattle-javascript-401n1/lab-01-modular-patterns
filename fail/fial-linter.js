'use strict';

function failLiner(){
  var name = "single quotes";
  var greeting = name + 'world'
  return 'fail';
}

fail = failLiner();
