module.exports = {
    REQUEST:{
        URL: "https://carloscarvalho:Hurst2019..@mautic.hurst.capital/api/segments/SEGMENT_ID/contact/MAUTIC_USER_ID/add"
    },
    CREATE:{
        SUCCESS:{
            CREATE: "Investments create whitch success !"   
        },
        INVALID_MSG:{
            PLATFORM_USER_ID: "Invalid platform_user_id !",
            SEGMENT_ID: "Invalid segment_id !",
            USER_SEGMENT_ADDED: "Invalid user_segment_added !"
        },
        MSG:{
            ERROR:{
                GERAL: "Error !",
                CREATE: "There was an error in create Investment, try again !", 
            },
            SUCESS:{

            }
        }
    },

    EDIT:{
        INVALID_MSG:{
            PLATFORM_USER_ID: "Invalid platform_user_id !",
            SEGMENT_ID: "Invalid segment_id !",
            SEGMENT_ADDED: "Invalid user_segment_added !"
        },
        MSG:{
            ERROR:{
                GERAL: "Error !",
                EDIT: "There was an error in edit Investment, try again !", 
            },
            SUCESS:{
                MSG: "Investment edited whith success !"
            }
        }
    },

    DELETE:{
        INVALID_MSG:{
        
        },
        MSG:{
            ERROR:{
                DELETE: "There was an error in delete Investment, try again !"
            },
            SUCESS:{
                MSG: "Investment deleted whith success !"
            }
        }
    }
};