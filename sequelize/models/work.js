/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class work extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            work.belongsTo(models.user);
            work.belongsTo(models.company);
        }
    }
    work.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            userId: {
                type: DataTypes.INTEGER,
            },
            jobPost: {
                type: DataTypes.STRING,
            },
        },
        {
            sequelize,
            modelName: "work",
            timestamps: false,
        }
    );
    return work;
};
