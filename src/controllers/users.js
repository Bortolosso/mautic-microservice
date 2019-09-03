const name = require("../constants/users");
const Users = require("../models/Users");
const Investments = require("../models/Investments");
let CONST = name;

function createUser(req, res) {
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log(CONST.CREATE.INVALID_MSG.PLATFORM_USER_ID);
    };
    
    if(!req.body.mautic_user_id || typeof req.body.mautic_user_id == undefined || req.body.mautic_user_id == null){
        console.log(CONST.CREATE.INVALID_MSG.MAUTIC_USER_ID);
    };

    if(!req.body.user_email || typeof req.body.user_email == undefined || req.body.user_email == null){
        console.log(CONST.CREATE.INVALID_MSG.USER_EMAIL);
    };

    if(erro.length > 0){
        console.log(CONST.CREATE.MSG.ERROR.GERAL);
    }else{
        const newUser = {
            platform_user_id: req.body.platform_user_id,
            mautic_user_id: req.body.mautic_user_id,
            user_email: req.body.user_email
        };
        new Users(newUser).save().then(() => {
            console.log(CONST.CREATE.MSG.SUCESS.MSG);
        }).catch((erro) => {
            console.log(CONST.CREATE.MSG.ERROR.CREATE);
        });
    };
};

function editUser(req, res, callback) {
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log(CONST.EDIT.INVALID_MSG.PLATFORM_USER_ID);
    };
    
    if(!req.body.mautic_user_id || typeof req.body.mautic_user_id == undefined || req.body.mautic_user_id == null){
        console.log(CONST.EDIT.INVALID_MSG.MAUTIC_USER_ID);
    };

    if(!req.body.user_email || typeof req.body.user_email == undefined || req.body.user_email == null){
        console.log(CONST.EDIT.INVALID_MSG.USER_EMAIL);
    };

    if(erro.length > 0){
        console.log(CONST.EDIT.INVALID_MSG.USER_EMAIL);
    }else{
        Users.findOne({_id: req.body.id}).then((Users) => {
            Users.platform_user_id = req.body.platform_user_id;
            Users.mautic_user_id = req.body.mautic_user_id;
            Users.user_email = req.body.user_email;

            Users.save().then(() =>{
                    console.log(CONST.EDIT.MSG.SUCESS);
                }).catch((error) => {
                    console.log(CONST.EDIT.MSG.ERROR.EDIT);
                });
            }).catch((error) => {
                console.log(error);
            }); 
        };   
};

function deleteUser(req, res){
    Users.remove({_id:req.body.id}).then(() => {
        console.log(CONST.DELETE.MSG.SUCESS.MSG);
    }).catch((erro) => {
        console.log(CONST.DELETE.MSG.ERROR.DELETE);
    });
};

function showId(req, res){
    Users.findOne({_id: req.body.id}).then((Users) =>{
        Users.platform_user_id = req.body.platform_user_id;
        Users.mautic_user_id = req.body.mautic_user_id;
        Users.user_email = req.body.user_email;
    });
};

function showAll(req, res){
    Users.find({}).then((Users) =>{
        Users.platform_user_id = req.body.platform_user_id;
        Users.mautic_user_id = req.body.mautic_user_id;
        Users.user_email = req.body.user_email;
    });
};

module.exports = {
    createUser,
    editUser,
    deleteUser,
    showId,
    showAll
};