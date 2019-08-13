const express = require("express");
const router = express.Router();
const mongoose =  require("mongoose");
require("../models/Users");
const Users = mongoose.model("Users");

router.get("/", (req, res) => {
    res.send("Principal/Neutro Page !");
});

router.get("/create/user", (req, res) =>{
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log("Invalid platform_user_id !");
    };
    
    if(!req.body.mautic_user_id || typeof req.body.mautic_user_id == undefined || req.body.mautic_user_id == null){
        console.log("Invalid mautic_user_id !");
    };

    if(!req.body.user_email || typeof req.body.user_email == undefined || req.body.user_email == null){
        console.log("Invalid user_email !");
    };

    if(erro.length > 0){
        console.log("Error !");
    }else{
        const newUser = {
            platform_user_id: req.body.platform_user_id,
            mautic_user_id: req.body.mautic_user_id,
            user_email: req.body.user_email
        }
        new Users(newUser).save().then(() => {
            console.log("Create whith success !");
        }).catch((erro) => {
            console.log("There was an error in create user, try again !");
        });
    }
});

router.post("/edit/user", (req, res) => {
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log("Invalid platform_user_id !");
    };
    
    if(!req.body.mautic_user_id || typeof req.body.mautic_user_id == undefined || req.body.mautic_user_id == null){
        console.log("Invalid mautic_user_id !");
    };

    if(!req.body.user_email || typeof req.body.user_email == undefined || req.body.user_email == null){
        console.log("Invalid user_email !");
    };

    if(erro.length > 0){
        console.log("Error !");
    }else{
        Users.find().then((Users) =>{
            Users.platform_user_id = req.body.platform_user_id;
            Users.mautic_user_id = req.body.mautic_user_id;
            Users.user_email = req.body.user_email;

            Users.save().then(() =>{
                console.log("Users edit whith success !");
            }).catch((error) => {
                console.log("There was an error in edit user, try again !", erro);
            });
        });
    };
});

router.post("/user/delete", (req, res) => {
    Users.remove().then(() => {
        console.log("User delete whith success !");
    }).catch((erro) => {
        console.log("There was an error in delete user, try again !")
    });
});