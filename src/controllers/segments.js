const name = require("../constants/segments");
const Segments = require("../models/Segments");

let CONST = name;

function createSegments(req, res){
    var erro = [];
    
    if(erro.length > 0){
        console.log(CONST.CREATE.MSG.ERROR.GERAL);
        res.send({ success: false });
    }else{
        const newSegment = {
            mautic_segment_id: req.body.mautic_segment_id,
            platform_equity_id: req.body.platform_equity_id,
            platform_step_id: req.body.platform_step_id
        };
        new Segments(newSegment).save().then(() => {
            console.log(CONST.CREATE.MSG.SUCESS.MSG);
        }).catch((erro) => {
            console.log(CONST.CREATE.MSG.SUCESS.MSG);
        });
        res.send({ success: true });
    };
};

function editSegments(req, res){
    var erro = [];

    if(erro.length > 0){
        console.log(CONST.EDIT.MSG.ERROR.GERAL);
    }else{
        Segments.findOne({_id: req.params.segmentId}).then((Segments) => {
            Segments.mautic_segment_id = req.body.mautic_segment_id;
            Segments.platform_equity_id = req.body.platform_equity_id;
            Segments.platform_step_id = req.body.platform_step_id;

            Segments.save().then(() =>{
                    console.log(CONST.EDIT.MSG.SUCESS.MSG);
                }).catch((error) => {
                    console.log(CONST.EDIT.MSG.ERROR.EDIT, erro);
                });
            });
        };
    };

function deleteSegments(req, res){
    Segments.deleteOne({_id:req.params.segmentId}).then((resDb) => {
         console.log(CONST.DELETE.MSG.SUCESS.MSG);
         res.send(resDb);
    }).catch((erro) => {
        console.log(CONST.DELETE.MSG.ERROR.DELETE);        
    });
};

function showId(req, res){
    Segments.findOne({_id: req.params.segmentId}).then((Segments) =>{
        Segments.mautic_segment_id = req.body.mautic_segment_id;
        Segments.platform_equity_id = req.body.platform_equity_id;
        Segments.platform_step_id = req.body.platform_step_id;

        res.send(Segments);
    });
};

function showAll(req, res){
    Segments.find().then((Segments) =>{
        Segments.mautic_segment_id = req.body.mautic_segment_id;
        Segments.platform_equity_id = req.body.platform_equity_id;
        Segments.platform_step_id = req.body.platform_step_id;

        res.send(Segments);
    });
};

module.exports = {
    createSegments,
    editSegments,
    deleteSegments,
    showId,
    showAll
};