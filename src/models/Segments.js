const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Segments = new Schema({
    mautic_segment_id:{
        type:String,
        required:false
    },
    platform_equity_id:{
        type:String,
        required:false
    },
    platform_step_id:{
        type:String,
        required: false
    }
});

mongoose.model("Segments", Segments);

//Comment

const Segment = mongoose.model("Users");

new Segment({
    segment_id:"1234_abcd",
    mautic_segment_id:"abcd_1234",
    platform_equity_id:"test@mail.com",
    platform_step_id:"ABCD_98760"
}).save().then(() => {
    console.log("Segment save !")
}).catch((erro) => {
    console.log("Segment erro save", erro)
});