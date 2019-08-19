const mongoose =  require("mongoose");
const Schema = mongoose.Schema;

const Users =  new Schema({
    platform_user_id:{
        type:String,
        required: false
    },
    mautic_user_id:{
        type:String,
        required:false
    },
    user_email:{
        type: String,
        required:false
    }
});

mongoose.model("Users", Users);

//Comment

const User = mongoose.model("Users");

new User({
    platform_user_id:"1234_abcd",
    mautic_user_id:"abcd_1234",
    user_email:"test@mail.com"
}).save().then(() => {
    console.log("User save !")
}).catch((erro) => {
    console.log("User erro save", erro)
});