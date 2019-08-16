const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Users");
const controller = require("../controllers/users")
const Users = mongoose.model("Users");

router.get("/", (req, res) => {
    res.send("Principal/Neutro Page !");
});

router.get("/create/user", controller.createUser);

router.put("/edit/user", controller.editUser);

router.delete("/user/delete", controller.deleteUser);