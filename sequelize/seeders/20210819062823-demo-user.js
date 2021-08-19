/** @format */

"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "users",
            [
                {
                    firstName: "Neh",
                    lastName: "Jain",
                },
                {
                    firstName: "Yash",
                    lastName: "Shah",
                },
                {
                    firstName: "Aum",
                    lastName: "Trivedi",
                },
            ],
            {}
        );
    },
    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("users", null, {});
    },
};
