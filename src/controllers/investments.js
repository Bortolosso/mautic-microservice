const name = require("../constants/investments");
const users = require("../constants/users");
let CONST = name;

function createInvestments(req, res){
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log(CONST.CREATE.INVALID_MSG.PLATFORM_USER_ID);
    };
    
    if(!req.body.segment_id || typeof req.body.segment_id == undefined || req.body.segment_id == null){
        console.log(CONST.CREATE.INVALID_MSG.USER.SEGMENT_ADDED);
    };

    if(!req.body.user_segment_added || typeof req.body.user_segment_added == undefined || req.body.user_segment_added == null){
        console.log(CONST.CREATE.INVALID_MSG.SEGMENT_ID);
    };

    if(erro.length > 0){
        console.log(CONST.CREATE.MSG.ERROR.GERAL);
    }else{
        const newInvestment = {
            platform_user_id: req.body.platform_user_id,
            segment_id: req.body.segment_id,
            user_segment_added: req.body.user_segment_added
        }
        new Investments(newInvestment).save().then(() => {
            console.log();
        }).catch((erro) => {
            console.log(CONST.MSG.ERROR.CREATE);
        });

        mauticUserIdFind(req, res, (error, result) =>{
            if (error) console.log('xpto')
    
            
        });
    };
};

function editInvestments(req, res){
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log(CONST.EDIT.INVALID_MSG.PLATFORM_USER_ID);
    };
    
    if(!req.body.segment_id || typeof req.body.segment_id == undefined || req.body.segment_id == null){
        console.log(CONST.EDIT.INVALID_MSG.SEGMENT_ID);
    };

    if(!req.body.user_segment_added || typeof req.body.user_segment_added == undefined || req.body.user_segment_added == null){
        console.log(CONST.EDIT.INVALID_MSG.USER_SEGMENT_ADDED);
    };

    if(erro.length > 0){
        console.log(CONST.EDIT.MSG.ERROR.GERAL);
    }else{
        Investments.findOne({_id: req.body.id}).then((Investments) => {
            Investments.platform_user_id = req.body.platform_user_id;
            Investments.segment_id = req.body.segment_id;
            Investments.user_segment_added = req.body.user_segment_added;

            Investments.save().then(() =>{
                console.log(CONST.EDIT.MSG.SUCESS.MSG);
            }).catch((error) => {
                console.log(CONST.EDIT.MSG.ERROR.EDIT, erro);
            });
        });
    };
};

function deleteInvestments(req, res){
    Investments.remove({_id:req.body.id}).then(() => {
        console.log(CONST.DELETE.MSG.SUCESS.MSG);
    }).catch((erro) => {
        console.log(CONST.DELETE.MSG.ERROR.DELETE);
    });
};

function showId(req, res){
    Investments.findOne({_id: req.body.id}).then((Investments) =>{
        Investments.platform_user_id = req.body.platform_user_id;
        Investments.segment_id = req.body.segment_id;
        Investments.user_segment_added = req.body.user_segment_added;
    });
};

function showAll(req, res){
    Investments.find({}).then((Investments) =>{
        Investments.platform_user_id = req.body.platform_user_id;
        Investments.segment_id = req.body.segment_id;
        Investments.user_segment_added = req.body.user_segment_added;
    });
};

function mauticUserIdFind(req, res, callback){
    req.body.query = {
        user_id: req.body.user_id
    };

    users.editUser(req, res, (error, result) =>{

        if (error == null){
            requestUrlUser(req, res);
        };
        
        if (error) {
            console.log('xpto');
        };
    });
};

function requestUrlUser(req, res){
    const Http = new XMLHttpRequest();
    const url = "https://carloscarvalho:Hurst2019..@mautic.hurst.capital/api/contacts/new"; //Constants
    Http.open("GET", url);
    Http.send();

    Http.onreadystatechange = () => {
        if(this.readyState == 4 && this.status == 200){
            console.log(Http.responseText);
        };
    };
};

module.exports = {
    createInvestments,
    editInvestments,
    deleteInvestments,
    showId,
    showAll
};