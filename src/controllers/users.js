function createUser(req, res) {
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log("Invalid platform_user_id !");
    };
    
    if(!req.body.segment_id || typeof req.body.segment_id == undefined || req.body.segment_id == null){
        console.log("Invalid segment_id !");
    };

    if(!req.body.user_segment_added || typeof req.body.user_segment_added == undefined || req.body.user_segment_added == null){
        console.log("Invalid user_segment_added !");
    };

    if(erro.length > 0){
        console.log("Error !");
    }else{
        const newInvestment = {
            platform_user_id: req.body.platform_user_id,
            segment_id: req.body.segment_id,
            user_segment_added: req.body.user_segment_added
        }
        new Investments(newInvestment).save().then(() => {
            console.log("Create Investment whith success !");
        }).catch((erro) => {
            console.log("There was an error in create Investment, try again !");
        });
    };
};

function editUser(req, res) {
    var erro = [];

    if(!req.body.platform_user_id || typeof req.body.platform_user_id == undefined || req.body.platform_user_id == null){
        console.log("Invalid platform_user_id !");
    };
    
    if(!req.body.mautic_user_id || typeof req.body.mautic_user_id == undefined || req.body.mautic_user_id == null){
        console.log("Invalid mautic_user_id !");
    };

    if(!req.body.user_email || typeof req.body.user_email == undefined || req.body.user_email == null){
        console.log("Invalid user_email !");
    };

    if(erro.length > 0){
        console.log("Error !");
    }else{
        Users.find().then((Users) =>{
            Users.platform_user_id = req.body.platform_user_id;
            Users.mautic_user_id = req.body.mautic_user_id;
            Users.user_email = req.body.user_email;

            Users.save().then(() =>{
                console.log("Users edit whith success !");
            }).catch((error) => {
                console.log("There was an error in edit user, try again !", erro);
            });
        });
    };   
};

function deleteUser(req, res){
    Users.remove().then(() => {
        console.log("User delete whith success !");
    }).catch((erro) => {
        console.log("There was an error in delete user, try again !")
    });
}

module.exports = {
    createUser,
    editUser,
    deleteUser
}