const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Investments");
const Investments = mongoose.model("Investments");

router.get("/", (req, res) => {
    res.send("Principal/Neutro Page !");
});

router.get("/create/investments", (req, res) =>{
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log("Invalid platform_user_id !");
    };
    
    if(!req.body.segment_id || typeof req.body.segment_id == undefined || req.body.segment_id == null){
        console.log("Invalid segment_id !");
    };

    if(!req.body.user_segment_added || typeof req.body.user_segment_added == undefined || req.body.user_segment_added == null){
        console.log("Invalid user_segment_added !");
    };

    if(erro.length > 0){
        console.log("Error !");
    }else{
        const newInvestment = {
            platform_user_id: req.body.platform_user_id,
            segment_id: req.body.segment_id,
            user_segment_added: req.body.user_segment_added
        }
        new Investments(newInvestment).save().then(() => {
            console.log("Create Investment whith success !");
        }).catch((erro) => {
            console.log("There was an error in create Investment, try again !");
        });
    }
});

router.post("/edit/investments", (req, res) => {
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log("Invalid platform_user_id !");
    };
    
    if(!req.body.segment_id || typeof req.body.segment_id == undefined || req.body.segment_id == null){
        console.log("Invalid segment_id !");
    };

    if(!req.body.user_segment_added || typeof req.body.user_segment_added == undefined || req.body.user_segment_added == null){
        console.log("Invalid user_segment_added !");
    };

    if(erro.length > 0){
        console.log("Error !");
    }else{
        Investments.find().then((Investments) =>{
            Investments.platform_user_id = req.body.platform_user_id;
            Investments.segment_id = req.body.segment_id;
            Investments.user_segment_added = req.body.user_segment_added;

            Investments.save().then(() =>{
                console.log("Investment edit whith success !");
            }).catch((error) => {
                console.log("There was an error in edit Investment, try again !", erro);
            });
        });
    };
});

router.post("/delete/investments", (req, res) => {
    Investments.remove().then(() => {
        console.log("Investment delete whith success !");
    }).catch((erro) => {
        console.log("There was an error in delete Investment, try again !")
    });
});