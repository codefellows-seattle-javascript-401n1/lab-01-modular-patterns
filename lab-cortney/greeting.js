'use strict';

const greet = require('./lib/greet');


// process.argv.forEach((val, index, array) => {
// 	// console.log(`${index}: ${val}`);
// });

console.log(greet(process.argv[2]));