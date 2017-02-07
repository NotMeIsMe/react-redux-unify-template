const fs = require('fs');

const packageJson = fs.readFileSync('./package.json');
let config;
try {
  config = JSON.parse(packageJson).babel;
} catch (err) {
  console.error('ERROR IN: babel-register');
  console.error(err);
}
require('babel-register')(config);

