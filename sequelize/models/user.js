/** @format */

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            user.hasOne(models.work, {
                foreignKey: "userId",
            });
        }
    }
    user.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
            },
            password: {
                type: DataTypes.STRING,
                defaultValue: "password",
            },
            fullName: {
                type: DataTypes.VIRTUAL,
                get() {
                    // const firstName = this.getDataValue(firstName);
                    // const lastName = this.getDataValue(lastName);
                    return this.firstName + " " + this.lastName;
                },
                set(value) {
                    throw new Error("Don't set full name value");
                },
            },
        },
        {
            sequelize,
            timestamps: false,
            modelName: "user",
        }
    );
    return user;
};
