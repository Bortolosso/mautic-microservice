const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Investments = new Schema({
    platform_user_id:{
        type:String,
        required: false
    },
    segment_id:{
        type: String,
        required:false
    },
    user_segment_added:{
        type:String,
        required:false
    }
});

mongoose.model("Investments", Investments);

//Comment

const Investment = mongoose.model("Users");

new Investment({
    platform_user_id:"1234_abcd",
    segment_id:"abcd_1234",
    user_segment_added:"test_1234"
}).save().then(() => {
    console.log("Investment save !")
}).catch((erro) => {
    console.log("Investment erro save", erro)
});