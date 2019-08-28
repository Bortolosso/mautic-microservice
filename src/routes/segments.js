const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Segments");
const Segments = mongoose.model("Segments");
const controller = require("../controllers/segments");

router.get("/", controller.showAll);

router.post("/", controller.createSegments);

router.get("/:segmentsId", controller.showId);

router.put("/:segmentsId", controller.editSegments);

router.delete("/:segmentsId", controller.deleteSegments);