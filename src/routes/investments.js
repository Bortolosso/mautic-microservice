const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Investments");
const Investments = mongoose.model("Investments");
const controller = require("../controllers/investments")

router.get("/", controller.showAll);

router.post("/", controller.createInvestments);

router.get("/:investmentId", controller.showId);

router.put("/:investmentId", controller.editInvestments);

router.delete("/:investmentId", controller.deleteInvestments);

module.exports = router;