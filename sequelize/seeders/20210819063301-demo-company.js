/** @format */

"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "companies",
            [
                {
                    company_name: "OpenXcell",
                },
                {
                    company_name: "Argusoft",
                },
                {
                    company_name: "Infosys",
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("companies", null, {});
    },
};
