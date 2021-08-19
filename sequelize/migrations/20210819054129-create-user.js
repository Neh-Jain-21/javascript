/** @format */

"use strict";
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable("users", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING,
            },
            password: {
                type: Sequelize.STRING,
                defaultValue: "password",
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable("users");
    },
};