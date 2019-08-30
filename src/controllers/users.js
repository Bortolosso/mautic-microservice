const name = require("../constants/users");
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
        const newInvestment = {
            platform_user_id: req.body.platform_user_id,
            mautic_user_id: req.body.mautic_user_id,
            user_email: req.body.user_email
        }
        new Investments(newInvestment).save().then(() => {
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
        var userData = req.body.query || {"_id": req.body.id};
        Users.findOne(userData).then((Users) => {
            Users.platform_user_id = req.body.platform_user_id;
            Users.mautic_user_id = req.body.mautic_user_id;
            Users.user_email = req.body.user_email;

            var userData = {
                mautic_user_id: Users.mautic_user_id
            };
            
            return callback(null, userData).then((req ,res) => {
                Users.save().then(() =>{
                    console.log(CONST.EDIT.MSG.SUCESS);
                }).catch((error) => {
                    console.log(CONST.EDIT.MSG.ERROR.EDIT);
                })
            }); 
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