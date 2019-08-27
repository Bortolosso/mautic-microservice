const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Segments");
const Segments = mongoose.model("Segments");
const controller = require("../controllers/segments");

router.get("/", (req, res) => {
    Segments.find().then((Segments) => {
        res.send("", {Segments: Segments});
    }).catch((error) => {
        console.log(error);
    });
});

router.post("/", controller.createSegments);

router.get("/:segmentsId", (req, res) => {
    Segments.findOne({_id: req.body.id}).then((Segments) => {
        res.send("", {Segments: Segments});
    }).catch((error) => {
        console.log(error);
    })
});

router.put("/:segmentsId", controller.editSegments);

router.delete("/:segmentsId", controller.deleteSegments);