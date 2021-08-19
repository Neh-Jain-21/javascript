/** @format */

"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert(
            "works",
            [
                {
                    userid: 5,
                    jobpost: "ASE",
                    companyId: 1,
                },
                {
                    userid: 6,
                    jobpost: "TL",
                    companyId: 1,
                },
                {
                    userid: 7,
                    jobpost: "TL",
                    companyId: 1,
                },
            ],
            {}
        );
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("works", null, {});
    },
};
