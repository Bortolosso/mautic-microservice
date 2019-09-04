const name = require("../constants/users");
const Users = require("../models/Users");

const request = require("request");

let CONST = name;

function createUser(req, res) {
    var erro = [];

    if(erro.length > 0){
        console.log(CONST.CREATE.MSG.ERROR.GERAL);
        res.send({ success: false});
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
        res.send({ success: true });
        requestUrl(req, res);
    };
};

function requestUrl(req, res){
    request.post(CONST.REQUEST.URL, (error, res, body) => {
        if (error) {
            console.error(error);
            return
        };
    console.log(`statusCode: ${res.statusCode}`);
    // console.log(body)
    });
};

function editUser(req, res, callback) {
    var erro = [];

    if(erro.length > 0){
        console.log(CONST.EDIT.INVALID_MSG.USER_EMAIL);
    }else{
        Users.findOne({_id: req.params.userId}).then((Users) => {
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
    Users.remove({_id:req.params.userId}).then((resDb) => {
        console.log(CONST.DELETE.MSG.SUCESS.MSG);
        res.send(resDb);
    }).catch((erro) => {
        console.log(CONST.DELETE.MSG.ERROR.DELETE);
    });
};

function showId(req, res){
    Users.findOne({_id: req.params.userId}).then((Users) =>{
        Users.platform_user_id = req.body.platform_user_id;
        Users.mautic_user_id = req.body.mautic_user_id;
        Users.user_email = req.body.user_email;

        res.send(Users);
    });
};

function showAll(req, res){
    Users.find({}).then((Users) =>{
        Users.platform_user_id = req.body.platform_user_id;
        Users.mautic_user_id = req.body.mautic_user_id;
        Users.user_email = req.body.user_email;

        res.send(Users);
    });
};

module.exports = {
    createUser,
    editUser,
    deleteUser,
    showId,
    showAll
};