const name = require("../constants/segments");
let CONST = name;

function createSegments(req, res){
    var erro = [];

    if(!req.body.segment_id || typeof req.body.segment_id == undefined || req.body.segment_id == null){
        console.log(CONST.CREATE.INVALID_MSG.SEGMENT_ID);
    };
    
    if(!req.body.mautic_segment_id || typeof req.body.mautic_segment_id == undefined || req.body.mautic_segment_id == null){
        console.log(CONST.CREATE.INVALID_MSG.MAUTIC_SEGMENT_ID);
    };

    if(!req.body.platform_equity_id || typeof req.body.platform_equity_id == undefined || req.body.platform_equity_id == null){
        console.log(CONST.CREATE.INVALID_MSG.PLATFORM_EQUITY_ID);
    };

    if(!req.body.platform_step_id || typeof req.body.platform_step_id == undefined || req.body.platform_step_id == null){
        console.log(CONST.CREATE.INVALID_MSG.PLATFORM_STEP_ID);
    };

    if(erro.length > 0){
        console.log(CONST.CREATE.MSG.ERROR.GERAL);
    }else{
        const newSegment = {
            segment_id: req.body.segment_id,
            mautic_segment_id: req.body.mautic_segment_id,
            platform_equity_id: req.body.platform_equity_id,
            platform_step_id: req.body.platform_step_id
        }
        new Segments(newUser).save().then(() => {
            console.log(CONST.CREATE.MSG.SUCESS.MSG);
        }).catch((erro) => {
            console.log(CONST.CREATE.MSG.SUCESS.MSG);
        });
    }
};

function editSegments(req, res){
    var erro = [];

    if(!req.body.segment_id || typeof req.body.segment_id == undefined || req.body.segment_id == null){
        console.log(CONST.EDIT.INVALID_MSG.SEGMENT_ID);
    };
    
    if(!req.body.mautic_segment_id || typeof req.body.mautic_segment_id == undefined || req.body.mautic_segment_id == null){
        console.log(CONST.EDIT.INVALID_MSG.MAUTIC_SEGMENT_ID);
    };

    if(!req.body.platform_equity_id || typeof req.body.platform_equity_id == undefined || req.body.platform_equity_id == null){
        console.log(CONST.EDIT.INVALID_MSG.PLATFORM_EQUITY_ID);
    };

    if(!req.body.platform_step_id || typeof req.body.platform_step_id == undefined || req.body.platform_step_id == null){
        console.log(CONST.EDIT.INVALID_MSG.PLATFORM_STEP_ID);
    };

    if(erro.length > 0){
        console.log(CONST.EDIT.MSG.ERROR.GERAL);
    }else{
        Segments.findOne({_id: req.body.id}).then((Segments) =>{
            Segments.segment_id = req.body.segment_id;
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
    Segments.remove({_id:req.body.id}).then(() => {
        console.log(CONST.DELETE.MSG.ERROR.DELETE);
    }).catch((erro) => {
        console.log(CONST.DELETE.MSG.ERROR.DELETE)
    });
};

function showId(req, res){
    Segments.findOne({_id: req.body.id}).then((Segments) =>{
        Segments.segment_id = req.body.segment_id;
        Segments.mautic_segment_id = req.body.mautic_segment_id;
        Segments.platform_equity_id = req.body.platform_equity_id;
        Segments.platform_step_id = req.body.platform_step_id;
    });
};

function showAll(req, res){
    Segments.find({}).then((Segments) =>{
        Segments.segment_id = req.body.segment_id;
        Segments.mautic_segment_id = req.body.mautic_segment_id;
        Segments.platform_equity_id = req.body.platform_equity_id;
        Segments.platform_step_id = req.body.platform_step_id;
    });
};

module.exports = {
    createSegments,
    editSegments,
    deleteSegments,
    showId,
    showAll
};