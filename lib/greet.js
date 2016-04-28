'use strict';

module.exports = (function() {
  return {
    greet: function(name){
      return `hello ${name}`;
    },
    cli: function(args) {
      const name = args[2] || 'default name';
      return this.greet(name);
    }
  };
}) ();
