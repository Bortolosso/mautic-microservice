const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Users");
const controller = require("../controllers/users")
const Users = mongoose.model("Users");

router.get("/", controller.showAll);

router.post("/", controller.createUser);

router.get("/:userId", controller.showId);

router.put("/:usersId", controller.editUser);

router.delete("/:usersId", controller.deleteUser);