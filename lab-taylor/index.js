'use strict';

const app = require(__dirname + '/lib/greet');
console.log(app.greet(process.argv[2]));
