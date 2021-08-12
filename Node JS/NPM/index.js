/** @format */

const chalk = require("./node_modules/chalk");
const validator = require("./node_modules/validator");

console.log(chalk.blue("Hello World"));

const res = validator.isEmail("nehjain@gmail.com");
console.log(res ? chalk.green.inverse("Valid") : chalk.red.inverse("Invalid"));
