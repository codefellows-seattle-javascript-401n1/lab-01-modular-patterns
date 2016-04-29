'use strict';

module.exports = (function() {
  return {
    greet: function(name){
      let n;
      n = Array.isArray(name) ? (name[2] || 'default name') : name;
      return `hello ${n}`;
    }
  };
}) ();
