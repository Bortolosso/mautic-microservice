const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Segments");
const Segments = mongoose.model("Segments");

router.get("/", (req, res) => {
    res.send("Principal/Neutro Page !");
});

router.get("/create/segment", (req, res) =>{
    var erro = [];

    if(!req.body.segment_id || typeof req.body.segment_id == undefined || req.body.segment_id == null){
        console.log("Invalid segment_id !");
    };
    
    if(!req.body.mautic_segment_id || typeof req.body.mautic_segment_id == undefined || req.body.mautic_segment_id == null){
        console.log("Invalid mautic_segment_id !");
    };

    if(!req.body.platform_equity_id || typeof req.body.platform_equity_id == undefined || req.body.platform_equity_id == null){
        console.log("Invalid platform_equity_id !");
    };

    if(!req.body.platform_step_id || typeof req.body.platform_step_id == undefined || req.body.platform_step_id == null){
        console.log("Invalid platform_equity_id !");
    };

    if(erro.length > 0){
        console.log("Error !");
    }else{
        const newSegment = {
            segment_id: req.body.segment_id,
            mautic_segment_id: req.body.mautic_segment_id,
            platform_equity_id: req.body.platform_equity_id,
            platform_step_id: req.body.platform_step_id
        }
        new Segments(newUser).save().then(() => {
            console.log("Create Segment whith success !");
        }).catch((erro) => {
            console.log("There was an error in create Segment, try again !");
        });
    }
});

router.post("/edit/segments", (req, res) => {
    var erro = [];

    if(!req.body.segment_id || typeof req.body.segment_id == undefined || req.body.segment_id == null){
        console.log("Invalid platform_user_id !");
    };
    
    if(!req.body.mautic_segment_id || typeof req.body.mautic_segment_id == undefined || req.body.mautic_segment_id == null){
        console.log("Invalid mautic_user_id !");
    };

    if(!req.body.platform_equity_id || typeof req.body.platform_equity_id == undefined || req.body.platform_equity_id == null){
        console.log("Invalid user_email !");
    };

    if(!req.body.platform_step_id || typeof req.body.platform_step_id == undefined || req.body.platform_step_id == null){
        console.log("Invalid platform_step_id !");
    };

    if(erro.length > 0){
        console.log("Error !");
    }else{
        Segments.find().then((Segments) =>{
            Segments.segment_id = req.body.segment_id;
            Segments.mautic_segment_id = req.body.mautic_segment_id;
            Segments.platform_equity_id = req.body.platform_equity_id;
            Segments.platform_step_id = req.body.platform_step_id;

            Segments.save().then(() =>{
                console.log("Segment edit whith success !");
            }).catch((error) => {
                console.log("There was an error in edit Segment, try again !", erro);
            });
        });
    };
});

router.post("/delete/segments", (req, res) => {
    Segments.remove().then(() => {
        console.log("Segment delete whith success !");
    }).catch((erro) => {
        console.log("There was an error in delete Segment, try again !")
    });
});