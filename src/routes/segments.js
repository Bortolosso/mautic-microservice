const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Segments");
const Segments = mongoose.model("Segments");
const controller = require("../controllers/segments");

router.get("/", (req, res) => {
    res.send("Principal/Neutro Page !");
});

router.get("/create/segment", controller.createSegments);

router.post("/edit/segments", controller.editSegments);

router.post("/delete/segments", controller.deleteSegments);