const mongoose = require('mongoose')


const AuthSchema = new mongoose.Schema({
    email:{
        //  type: String,
        //  required: true,
    },
    password:{
        //  required: true,
    },
    name:{
        //  type: String,  
        //  required: true,
    },
    phone:{
        //  type: number,
          // "test": "echo \"Error: no test specified\" && exit 1"

    },
});

const Auth = mongoose.model("users", AuthSchema)
module.exports = Auth