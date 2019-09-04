const name = require("../constants/investments");
const Investments = require("../models/Investments");

const request = require("request");

let CONST = name;

function createInvestments(req, res){
    var erro = [];
    
    if(erro.length > 0){
        console.log(CONST.CREATE.MSG.ERROR.GERAL);
        res.send({ sucess: false });
    }else{
        const newInvestment = {
            platform_user_id: req.body.platform_user_id,
            segment_id: req.body.segment_id,
            user_segment_added: req.body.user_segment_added
        }        
        new Investments(newInvestment).save().then(() => {
            console.log(CONST.CREATE.SUCCESS.CREATE);
        }).catch((erro) => {
            console.log(CONST.MSG.ERROR.CREATE);
        });
        res.send({ sucess: true });
        requestUrl(req, res);
    };
};

function requestUrl(){
    request.post(CONST.REQUEST.URL, (error, res, body) => {
        if(error) {
            console.error(error);
            return;
        };
    console.log(`statusCode: ${res.statusCode}`);
    console.log(body);
    });
};

function editInvestments(req, res){
    var erro = [];

    if(erro.length > 0){
        console.log(CONST.EDIT.MSG.ERROR.GERAL);
    }else{
        Investments.findOne({_id: req.params.investmentId}).then((Investments) => {
            Investments.platform_user_id = req.body.platform_user_id;
            Investments.segment_id = req.body.segment_id;
            Investments.user_segment_added = req.body.user_segment_added;

            Investments.save().then(() =>{
                console.log(CONST.EDIT.MSG.SUCESS.MSG);
                res.send(Investments);
            }).catch((error) => {
                console.log(CONST.EDIT.MSG.ERROR.EDIT, erro);
            });
        });
    };
};

function deleteInvestments(req, res){
    Investments.remove({_id:req.params.investmentId}).then((resDb) => {
        console.log(CONST.DELETE.MSG.SUCESS.MSG);
        res.send(resDb);
    }).catch((erro) => {
        console.log(CONST.DELETE.MSG.ERROR.DELETE);
    });
};

function showId(req, res){
    Investments.findOne({_id: req.params.investmentId}).then((Investments) =>{
        Investments.platform_user_id = req.body.platform_user_id;
        Investments.segment_id = req.body.segment_id;
        Investments.user_segment_added = req.body.user_segment_added;

        res.send(Investments);
    });
};

function showAll(req, res){
    Investments.find().then((Investments) =>{
        Investments.platform_user_id = req.body.platform_user_id;
        Investments.segment_id = req.body.segment_id;
        Investments.user_segment_added = req.body.user_segment_added;

        res.send(Investments);
    });
};

module.exports = {
    createInvestments,
    editInvestments,
    deleteInvestments,
    showId,
    showAll
};
