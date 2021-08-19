/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class company extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            Company.hasOne(models.work, {
                foreignKey: "companyId",
            });
        }
    }
    company.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            company_name: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "company",
            timestamps: false,
        }
    );
    return company;
};
