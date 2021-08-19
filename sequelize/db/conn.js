/** @format */

const { Sequelize } = require("sequelize");

//DB connection
const sequelize = new Sequelize("sequelize", "root", "1234", {
    host: "localhost",
    dialect: "mysql",
});

module.exports = sequelize;
