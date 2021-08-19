/** @format */
const { Op, DataTypes } = require("sequelize");
const sequelize = require("../db/conn");
const express = require("express");
const router = express.Router();
const User = require("../models/user")(sequelize, DataTypes);
const Work = require("../models/work")(sequelize, DataTypes);
const Company = require("../models/company")(sequelize, DataTypes);

//register user
router.post("/setUser", async (req, res) => {
    try {
        const params = req.body;

        const user = await User.create({
            firstName: params.firstName,
            lastName: params.lastName,
        });

        res.status(200).send({ msg: "Registered" });
    } catch (error) {
        console.log(error);
    }
});

//get all users in db
router.get("/getAllUsers", async (req, res) => {
    try {
        const users = await User.findAll({
            // order: [["id"], ["firstName"], ["lastName"]],
            order: [["firstName"]],
        });

        res.status(200).send(users);
    } catch (error) {
        console.log(error);
    }
});

//left outer join
//get all users working
router.get("/getWork", async (req, res) => {
    try {
        const users = await Work.findAll({
            attributes: ["jobPost"],
            include: [
                {
                    model: User,
                    attributes: ["firstName", "lastName", "fullName"],
                    //converts outer join to inner join
                    required: true,
                },
                {
                    model: Company,
                    attributes: ["company_name"],
                    //converts outer join to inner join
                    required: true,
                },
            ],
        });

        // const users = await sequelize.query(
        //     "SELECT users.firstName, users.lastName, works.workingAt, works.jobPost FROM users INNER JOIN works ON users.id = works.userId"
        // );

        res.status(200).send(users);
    } catch (error) {
        console.log(error);
    }
});

//get a single user
router.post("/getUser", async (req, res) => {
    try {
        const params = req.body;

        //Note we can use two types!
        const user = await User.findOne({
            where: {
                firstName: {
                    [Op.eq]: params.firstName,
                },
                lastName: params.lastName,
            },
        });

        res.status(200).send(user);
    } catch (error) {
        console.log(error);
    }
});

//get user by Id
router.get("/getUserById/:id", async (req, res) => {
    try {
        let id = req.params.id;

        if (!parseInt(id)) {
            res.status(200).send({ msg: "Id can only be Number" });
        } else {
            id = parseInt(id);
            const user = await User.findByPk(id);

            if (user == null) {
                res.status(200).send({ msg: "User not Found" });
            } else {
                res.status(200).send({ msg: "User Found", user: user });
            }
        }
    } catch (error) {
        console.log(error);
    }
});

//get full user name by Id using get()
router.get("/getFullUserById/:id", async (req, res) => {
    try {
        let id = req.params.id;

        if (!parseInt(id)) {
            res.status(200).send({ msg: "Id can only be Number" });
        } else {
            id = parseInt(id);
            const user = await User.findByPk(id);

            if (user == null) {
                res.status(200).send({ msg: "User not Found" });
            } else {
                res.status(200).send({
                    msg: "User Found",
                    user: user.fullName,
                });
            }
        }
    } catch (error) {
        console.log(error);
    }
});

//update a user
router.patch("/updateUser", async (req, res) => {
    try {
        const params = req.body;

        const updateUser = await User.update(
            {
                firstName: params.newFirstName,
                lastName: params.newLastName,
            },
            {
                where: {
                    firstName: params.firstName,
                    lastName: params.lastName,
                },
                limit: 1,
            }
        );

        res.status(200).send({ msg: "User Updated" });
    } catch (error) {
        console.log(error);
    }
});

//delete user
router.delete("/deleteUser", async (req, res) => {
    try {
        const params = req.body;

        const deletedUser = await User.destroy({
            where: {
                firstName: params.firstName,
                lastName: params.lastName,
            },
        });

        if (deletedUser == 0) {
            res.status(200).send({ msg: "User Doesn't Exists" });
        }

        res.status(200).send({ msg: "User Deleted" });
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
