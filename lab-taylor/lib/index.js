'use strict';

const app = require(__dirname + '/greet');

function runApp() {
  const name = process.argv[2] || 'default name';
  console.log(app.greet(name));
}

runApp();
