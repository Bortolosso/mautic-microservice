const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Segments");
const Segments = mongoose.model("Segments");
const controller = require("../controllers/segments");

router.get("/", controller.showAll);

router.post("/", controller.createSegments);

router.get("/:segmentId", controller.showId);

router.put("/:segmentId", controller.editSegments);

router.delete("/:segmentId", controller.deleteSegments);

module.exports = router;