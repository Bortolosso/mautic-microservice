const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Investments");
const Investments = mongoose.model("Investments");
const controller = require("../controllers/investments")

router.get("/", (req, res) => {
    Investments.find().then((Investments) => {
        res.send("", {Investments: Investments})
    }).catch((error) => {
        console.log(error);
    });
});

router.post("/", controller.createInvestments);

router.get("/:investmentId", (req, res) => {
    Investments.findOne({_id: req.body.id}).then((Investments) =>{
        res.send("", {Investments: Investments});
    }).catch((error) =>{
        console.log(error);
    });
});

router.put("/:investmentId", controller.editInvestments);

router.delete("/:investmentId", controller.deleteInvestments);