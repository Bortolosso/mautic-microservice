const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Users");
const controller = require("../controllers/users")
const Users = mongoose.model("Users");

router.get("/", (req, res) => {
    res.send("Principal/Neutro Page !");
});

router.get("/create/users", controller.createUser);

router.put("/edit/users", controller.editUser);

router.delete("/delete/users", controller.deleteUser);