const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Users");
const controller = require("../controllers/users")
const Users = mongoose.model("Users");

router.get("/", (req, res) => {
    Users.find().then((Users) => {
        res.send("", {Users: Users});
    }).catch((error) => {
        console.log(error)
    });
});

router.post("/", controller.createUser);

router.get("/:userId", (req, res) => {
    Users.findOne({_id: req.body.id}).then((Users) => {
        res.send("", {Users:Users});
    }).catch((error) => {
        console.log(error);
    });
});

router.put("/:usersId", controller.editUser);

router.delete("/:usersId", controller.deleteUser);