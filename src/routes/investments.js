const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Investments");
const Investments = mongoose.model("Investments");
const controller = require("../controllers/investments")

router.get("/", (req, res) => {
    res.send("Principal/Neutro Page !");
});

router.get("/create/investments", controller.createInvestments);

router.put("/edit/investments", controller.editInvestments);

router.delete("/delete/investments", controller.deleteInvestments);